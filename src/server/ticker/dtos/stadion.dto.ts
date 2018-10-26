import {MatchDto} from './match.dto';
import { KontextInfoDto } from './kontextInfo.dto';

export class StadionDto extends KontextInfoDto {
    adresse: string;
    ort: string;
    averageZuschaer: string;
    letzteMatch: MatchDto;
    nachsteMatch: MatchDto;
}