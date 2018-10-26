import { Injectable } from '@nestjs/common';
import { Repository } from './repostiory';
import { MessageService, ParsedMessage } from './message.service';
import { KontextInfoDto } from './dtos/kontextInfo.dto';
import { PlayerDto } from './dtos/player.dto';
import { StadionDto } from "./dtos/stadion.dto";

@Injectable()
export class TickerService {
    constructor(private repository: Repository, private readonly messageService: MessageService) { }

    public async proccessMessage(message: string): Promise<Array<KontextInfoDto>> {
        const result: ParsedMessage = await this.messageService.parse(message);
        const infos = [];
        if (result) {
            infos.push(...await this.checkPlayer(result));
            infos.push(...await this.checkStadion(result));
        }
        return infos;
    }

    private async checkPlayer(data: ParsedMessage): Promise<Array<PlayerDto>> {
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
                    dto.action = data.intent;
                    info.push(dto);
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
}