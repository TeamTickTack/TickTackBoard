import { ITickerHelperEntity } from './tickerHelperEntitiy.interface';
import { Player } from '../model/player';

export class MatchInfoDto implements ITickerHelperEntity {
    matchDetail: string;  // Heimmannschaft vs. Gastmannschaft
    ort: string;
    referee: string; // Schiedsrichter
    matchHistory: string; // Letztes oder nächstes Spiel der beiden Mannschaften
    static FromMatch(): MatchInfoDto {
        return {

        } as MatchInfoDto;
    }
}
