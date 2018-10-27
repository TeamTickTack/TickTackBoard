import { KontextInfoDto } from './kontextInfo.dto';
import {Partie} from "../model/partie";

export class MatchDto extends KontextInfoDto {
    static fromPartie(partie: Partie) {
        const dto = new MatchDto();
        dto.datum = partie.date;
        dto.auswaertsteam = partie.guestName;
        dto.heimteam = partie.homeName;
        dto.guestTotal = partie.guestTotal;
        dto.homeTotal = partie.homeTotal;
        console.log(dto);
        return dto;
    }
    datum: string;
    heimteam: string;
    auswaertsteam: string;
    ort: string;
    guestTotal: string;
    homeTotal: string;

}