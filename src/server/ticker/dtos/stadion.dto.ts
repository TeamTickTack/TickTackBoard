import {MatchDto} from './match.dto';
import { KontextInfoDto } from './kontextInfo.dto';
import {Player} from "../model/player";
import {Arena} from "../model/arena";

export class StadionDto extends KontextInfoDto {

    static fromArena(arena: Arena): StadionDto {
        const dto = new StadionDto();
        dto.type = 'arena';
        dto.adresse = arena.address;
       //dto.capacity = arena.capacity;
        dto.name = arena.name;
        dto.ort = arena.city;
        return dto;
    }
    adresse: string;
    ort: string;
    name: string;
    averageZuschaer: string; // TODO
    letzteMatch: MatchDto; // TODO
    nachsteMatch: MatchDto; // TODO
}