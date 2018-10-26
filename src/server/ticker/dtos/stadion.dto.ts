import {MatchDto} from './match.dto';
import { KontextInfoDto } from './kontextInfo.dto';
import {Player} from "../model/player";
import {Arena} from "../model/arena";

export class StadionDto extends KontextInfoDto {

    static fromArena(arena: Arena): StadionDto {
        const dto = new StadionDto();
        dto.type = 'arena';
        dto.adresse = arena.address;
        dto.capacity = arena.capacity;
        dto.name = arena.name;
        dto.plz = arena.zip;
        dto.ort = arena.city;
        dto.img = arena.img;
        dto.url = 'https://ticktack.blob.core.windows.net/stadien/' + arena.img;
        return dto;
    }
    img: string;
    capacity: string;
    adresse: string;
    plz: string;
    ort: string;
    name: string;
    averageZuschaer: string; // TODO
    letzteMatch: MatchDto; // TODO
    nachsteMatch: MatchDto; // TODO
    url: string;
}