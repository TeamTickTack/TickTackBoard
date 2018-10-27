import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AppService } from '../../app.service';
import { TeamDto } from '../../../../server/ticker/dtos/team.dto';

@Component({
    selector: 'app-match',
    templateUrl: './match.component.html',
    styleUrls: ['./match.component.css']
})
export class MatchComponent {
    @Output() gameStarted = new EventEmitter<GameInfo>();

    constructor(private readonly appService: AppService) {
        this.appService.getTeams().subscribe(t => {
            this.teams = t;
            this.homeTeam = this.teams[0];
            this.guestTeam = this.teams[2];
        }
        )
    }

    public teams: Array<TeamDto>;
    public homeTeam: TeamDto;
    public guestTeam: TeamDto;
    public matchStarted: boolean = false;
    public startGame() {
        this.gameStarted.emit({ homeTeam: this.homeTeam, guestTeam: this.guestTeam });
        this.matchStarted = true;
    }


}

export interface GameInfo {
    homeTeam: TeamDto;
    guestTeam: TeamDto;
}