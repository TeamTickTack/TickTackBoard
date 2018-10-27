import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AppService } from '../../app.service';

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
            this.guestTeam = this.teams[1];
        }
        )
    }

    public teams;
    public homeTeam;
    public guestTeam;

    public startGame() {
        this.gameStarted.emit({ homeTeamUid: this.homeTeam,guestTeamUid: this.guestTeam });
    }


}

export interface GameInfo {
    homeTeamUid: string;
    guestTeamUid: string;
}