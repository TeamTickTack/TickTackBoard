import {TopscorerDto} from './topscorer.dto';
import { KontextInfoDto } from './kontextInfo.dto';

export class GoalDto extends KontextInfoDto {
    anzahl: string;
    rangliste: TopscorerDto;
    zeitpunkt: string; // Ev. Vergleich erste mit zweiter Halbzeit
}