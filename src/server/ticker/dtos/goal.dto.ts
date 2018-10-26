import {MatchDto} from './match.dto';
import {TopscorerDto} from './topscorer.dto';

export class GoalDto {
    anzahl: string;
    rangliste: TopscorerDto;
    zeitpunkt: string; // Ev. Vergleich erste mit zweiter Halbzeit
}