import { KontextInfoDto } from './kontextInfo.dto';
import { Player } from '../model/player';

export class PlayerDto extends KontextInfoDto {
    static fromPlayer(player: Player): PlayerDto {
        const dto = new PlayerDto();
        dto.type = 'player';
        dto.nummer = player.shirt_nr;
        dto.assists = player.assists;
        dto.geburtsdatum = player.formatted_date_of_birth;
        dto.tore = player.goals;
        dto.gespielteMinuten = player.minutes_played;
        dto.gehalteneSchuesse = player.held_shots;
        dto.matches = player.matches_played;
        dto.position = player.position;
        dto.nationalitaet = player.nationality;
        dto.gelbeKarten = player.yellow_cards;
        dto.roteKarten = player.red_cards;
        dto.firstName = player.first_name;
        dto.lastName = player.last_name;
        return dto;
    }
    // portrait:   Spielerporträt (Foto)
    nummer: string;
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
    gespielteMinuten: string;
    matches: string;
    spielerForm: string; // Wie hat er in den letzten drei Spielen gespielt
    gehalteneSchuesse: number;
    action: string;
}
