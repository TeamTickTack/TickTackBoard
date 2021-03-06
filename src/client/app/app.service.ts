import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { KontextInfoDto } from '../../server/ticker/dtos/kontextInfo.dto';
import { TickerMessageDto } from '../../server/ticker/dtos/tickerMessage.dto';
import { TeamDto } from '../../server/ticker/dtos/team.dto';
import { Observable } from "rxjs";
import { PlayerDto } from '../../server/ticker/dtos/player.dto';
import { MatchDto } from "../../server/ticker/dtos/match.dto";

@Injectable()
export class AppService {
    constructor(private http: HttpClient) { }
    public processMessage(message: TickerMessageDto) {
        return this.http.post<KontextInfoDto[]>('/api/ticker/processMessage', message);
    }

    public getTeams(): Observable<Array<TeamDto>> {
        return this.http.get<Array<TeamDto>>('/api/ticker/teams');
    }
    public getPlayersOfTeam(uid:string): Observable<Array<PlayerDto>> {
        return this.http.get<Array<PlayerDto>>('/api/ticker/team/'+uid+'/players');
    }
    public getMatches(team1Id:string, team2Id:string): Observable<Array<MatchDto>> {
        return this.http.get<Array<MatchDto>>('/api/ticker/partie/'+team1Id+'/'+team2Id);
    }
    
}