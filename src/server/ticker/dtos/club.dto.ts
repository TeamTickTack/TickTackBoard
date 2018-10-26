import {MatchDto} from './match.dto';

export class ClubDto {
    rangliste: string;
    letzteMatch: MatchDto;
    nachsteMatch: MatchDto;
}