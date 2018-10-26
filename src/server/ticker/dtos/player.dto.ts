import { KontextInfoDto } from './kontextInfo.dto';

export class PlayerDto extends KontextInfoDto {
    // portrait:   Spielerporträt (Foto)
    firstName: string;
    lastName: string;
    position: string;
    geburtsdatum: string;
    nationalitaet: string;
    tore: string;
    assists: string;
    roteKarten: string;
    gelbeKarten: string;
    matchInfosZumSpieler: string;
    spielerForm: string; // Wie hat er in den letzten drei Spielen gespielt
}
