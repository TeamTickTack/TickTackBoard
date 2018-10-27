import { Injectable } from '@nestjs/common';
import { Repository } from './repostiory';
import { MessageService, ParsedMessage } from './message.service';
import { KontextInfoDto } from './dtos/kontextInfo.dto';
import { PlayerDto } from './dtos/player.dto';
import { StadionDto } from "./dtos/stadion.dto";
import { ClubDto } from "./dtos/club.dto";
import { Ranking } from "./model/ranking";
import { MatchDto } from "./dtos/match.dto";
import { GoalDto } from "./dtos/goal.dto";
import { count } from "rxjs/operators";
import { CardDto } from "./dtos/card.dto";


@Injectable()
export class TickerService {
    constructor(private repository: Repository, private readonly messageService: MessageService) {
    }

    public async proccessMessage(message: string): Promise<Array<KontextInfoDto>> {
        if (message.toLowerCase().includes("wurst")) {
            return {
                wurst: true,
            } as any;
        }
        const result: ParsedMessage = await this.messageService.parse(message);
        const infos = [];
        if (result) {
            infos.push(...await this.checkPlayer(result));
            infos.push(...await this.checkStadion(result));
            infos.push(...await this.checkClub(result));
        }
        return infos;
    }

    private async checkPlayer(data: ParsedMessage): Promise<Array<KontextInfoDto>> {
        const info = [];
        const foundPlayers: Array<string> = [];
        for (const player of data.entities) {
            if (player.entity !== 'player')
                continue;
            const playerUid = player.option;
            if (playerUid) {
                if (!foundPlayers.some((u) => u === playerUid)) {
                    foundPlayers.push(playerUid);
                    const dto = PlayerDto.fromPlayer(await this.repository.findPlayer(playerUid));
                    info.push(dto);
                    if (data.score >= 0.5) {
                        dto.action = data.intent;
                        if (data.intent === "redCard" || data.intent === "yellowCard") {
                            info.push(await this.createCardInfo());
                        }
                        if (data.intent === "goalScored") {
                            info.push(await this.createGoalInfo());
                        }
                    }
                }
            }
        }
        return info;
    }

    public async checkStadion(data: ParsedMessage): Promise<Array<KontextInfoDto>> {
        const info = [];
        for (const arena of data.entities.filter(e => e.entity === 'arena')) {
            const areaUid = arena.option;

            info.push(StadionDto.fromArena(await this.repository.findArena(areaUid)));
        }
        return info;
    }

    public async checkClub(data: ParsedMessage): Promise<Array<KontextInfoDto>> {
        const info = [];
        for (const club of data.entities.filter(e => e.entity === 'club')) {
            const clubUid = club.option;

            const ranking = await this.repository.findRanking(clubUid);
            const partie = await this.repository.findPartie(ranking.name);
            const clubDto = ClubDto.fromRanking(ranking);
            const lastParties = partie.filter(p => {
                const splittedDate = p.date.split('.');
                const date = new Date(parseInt(splittedDate[2]), parseInt(splittedDate[1]), parseInt(splittedDate[0]), 0, 0, 0, 0);
                return date < new Date()
            }).slice(0, 3);
            clubDto.letzteMatch = lastParties.map(partie => MatchDto.fromPartie(partie));
            const nextParties = partie.filter(p => {
                const splittedDate = p.date.split('.');
                const date = new Date(parseInt(splittedDate[2]), parseInt(splittedDate[1]), parseInt(splittedDate[0]), 0, 0, 0, 0);
                return date > new Date()
            });
            clubDto.nachsteMatch = nextParties.map(partie => MatchDto.fromPartie(partie));
            info.push(clubDto);
        }
        return info;
    }

    public async createGoalInfo(): Promise<KontextInfoDto> {

        const parties = await this.repository.getParties();
        const topscorer = await this.repository.getTopScorer();

        const goalDto = new GoalDto();
        goalDto.type = 'goal';
        goalDto.topscorergoals = parseInt(topscorer.goals);
        goalDto.topscorer = topscorer.last_name;
        goalDto.heimTore = 0;
        goalDto.gastTore = 0;
        goalDto.ersteHalzeitTore = 0;
        goalDto.gesamtTore = 0;
        goalDto.zweiteHalbzeitTore = 0;
        for (const partie of parties) {
            goalDto.heimTore += parseInt(partie.homeTotal);
            goalDto.gastTore += parseInt(partie.guestTotal);
            goalDto.ersteHalzeitTore += parseInt(partie.homeHalftime) + parseInt(partie.guestHalftime);
            goalDto.gesamtTore += parseInt(partie.guestTotal) + parseInt(partie.homeTotal);
        }
        goalDto.zweiteHalbzeitTore = goalDto.gesamtTore - goalDto.ersteHalzeitTore;

        return goalDto;
    }

    public async createCardInfo(): Promise<KontextInfoDto> {
        const referees = await this.repository.getReferees();
        const topgelbreferee = await this.repository.getTopGelbReferee();
        const toprotreferee = await this.repository.getTopRotReferee();
        console.log(referees);
        console.log(toprotreferee);
        const cardDto = new CardDto();
        cardDto.type = 'card';
        cardDto.schiedsrichterMitMeistenGelbeKarten = topgelbreferee.first_name + ' ' + topgelbreferee.last_name;
        cardDto.schiedsrichterMitMeistenRoteKarten = toprotreferee.first_name + ' ' + toprotreferee.last_name;
        cardDto.anzahlGelbeKarten = 0;
        cardDto.anzahlRoteKarten = 0;
        for (const referee of referees) {
            cardDto.anzahlGelbeKarten += referee.yellow_cards;
            cardDto.anzahlRoteKarten += referee.red_cards;
        }
        return cardDto;
    }

}