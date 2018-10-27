import {KontextInfoDto} from "./kontextInfo.dto";

export class CardDto extends KontextInfoDto {
    anzahlRoteKarten: number;
    anzahlGelbeKarten: number;

    schiedsrichterMitMeistenRoteKarten: string;
    schiedsrichterMitMeistenGelbeKarten: string;

 }