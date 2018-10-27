import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { KontextInfoDto } from '../../server/ticker/dtos/kontextInfo.dto';
import { TickerMessageDto } from '../../server/ticker/dtos/tickerMessage.dto';
import { TeamDto } from '../../server/ticker/dtos/team.dto';
import { Observable } from "rxjs";
import { PlayerDto } from '../../server/ticker/dtos/player.dto';

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
}