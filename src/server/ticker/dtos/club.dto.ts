import {MatchDto} from './match.dto';
import { KontextInfoDto } from './kontextInfo.dto';

export class ClubDto extends KontextInfoDto {
    rangliste: string;
    letzteMatch: MatchDto;
    nachsteMatch: MatchDto;
}