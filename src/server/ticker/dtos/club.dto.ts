import {MatchDto} from './match.dto';
import { KontextInfoDto } from './kontextInfo.dto';
import {Arena} from "../model/arena";
import {Ranking} from "../model/ranking";

export class ClubDto extends KontextInfoDto {
    static fromRanking(ranking: Ranking): ClubDto {
        const dto = new ClubDto();
        dto.type = 'club';
        dto.rank = ranking.rank;
        dto.spectators_average = ranking.spectators_average;
        dto.wins = ranking.wins;
        dto.loss = ranking.loss;
        dto.points = ranking.points;
        return dto;
    }

    rank: string;
    spectators_average: string;
    wins: string;
    loss: string;
    draw: string;
    points: string;
    letzteMatch: MatchDto[];
    nachsteMatch: MatchDto[];
}