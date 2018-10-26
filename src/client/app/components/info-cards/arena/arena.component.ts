import { Component, Input } from '@angular/core';
import { StadionDto } from '../../../../../server/ticker/dtos/stadion.dto'

@Component({
  selector: 'app-arena-card',
  templateUrl: './arena.component.html',
  styleUrls: ['./arena.component.css']
})
export class ArenaComponent {
    @Input()
    public arenaInfo: StadionDto;
    constructor() {}
}