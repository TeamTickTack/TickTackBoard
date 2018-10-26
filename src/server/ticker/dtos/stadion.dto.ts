import {MatchDto} from './match.dto';

export class StadionDto {
    adresse: string;
    ort: string;
    averageZuschaer: string;
    letzteMatch: MatchDto;
    nachsteMatch: MatchDto;
}