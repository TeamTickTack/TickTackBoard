import {TopscorerDto} from './topscorer.dto';
import { KontextInfoDto } from './kontextInfo.dto';

export class GoalDto extends KontextInfoDto {
    gesamtTore: number;
    topscorer: string;
    topscorergoals: number;
    heimTore: number;
    gastTore: number;
    ersteHalzeitTore: number;
    zweiteHalbzeitTore: number;
}