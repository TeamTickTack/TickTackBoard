import {MatchDto} from './match.dto';
import { KontextInfoDto } from './kontextInfo.dto';

export class RefereeDto extends KontextInfoDto {
    // portrait:   Spielerporträt (Foto)
    name: string;
    geburtsdatum: string;
    nationalitaet: string;
    match: MatchDto;
    anzahlKarten: string;
}
