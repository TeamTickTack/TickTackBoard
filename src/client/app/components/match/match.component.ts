import { Component, Input } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
    selector: 'app-match',
    templateUrl: './match.component.html',
    styleUrls: ['./match.component.css']
})
export class MatchComponent {
    constructor(private readonly appService: AppService) {
        this.appService.getTeams().subscribe(t => {
            this.teams = t;
            this.homeTeam = this.teams[0];
            this.guetTeam = this.teams[1];
        }
        )
    }

    public teams;
    public homeTeam
    public guetTeam

    public startGame() {

    }
}