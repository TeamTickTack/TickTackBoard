import { KontextInfoDto } from './kontextInfo.dto';

export class MatchDto extends KontextInfoDto {
    datum: string;
    heimteam: string;
    auswaertsteam: string;
    ort: string;
    resultat: string;
}