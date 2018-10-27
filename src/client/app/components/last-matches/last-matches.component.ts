import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AppService } from '../../app.service';
import { TeamDto } from '../../../../server/ticker/dtos/team.dto';
import { MatchDto } from '../../../../server/ticker/dtos/match.dto';

@Component({
    selector: 'app-last-matches',
    templateUrl: './last-matches.component.html',
    styleUrls: ['./last-matches.component.css']
})
export class LastMatchesComponent {

    constructor(private readonly appService: AppService) {

    }
    @Input()
    public lastMatches: MatchDto;

}
