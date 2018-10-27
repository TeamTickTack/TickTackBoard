import { Component, Input } from '@angular/core';
import {GoalDto} from "../../../../../server/ticker/dtos/goal.dto";

@Component({
  selector: 'app-goal-card',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent {
    @Input()
    public goalInfo: GoalDto;
    constructor() {}
}