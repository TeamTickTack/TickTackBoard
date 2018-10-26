import { Player } from '../model/player';
import { KontextInfoDto } from './kontextInfo.dto';

export class MatchInfoDto extends KontextInfoDto {
    matchDetail: string;  // Heimmannschaft vs. Gastmannschaft
    ort: string;
    referee: string; // Schiedsrichter
    matchHistory: string; // Letztes oder nächstes Spiel der beiden Mannschaften
}
