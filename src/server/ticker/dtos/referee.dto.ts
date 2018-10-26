import {MatchDto} from './match.dto';

export class RefereeDto {
    // portrait:   Spielerporträt (Foto)
    name: string;
    geburtsdatum: string;
    nationalitaet: string;
    match: MatchDto;
    anzahlKarten: string;
}
