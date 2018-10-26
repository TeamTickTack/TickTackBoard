import { Component, Input } from '@angular/core';
import { PlayerDto } from '../../../../../server/ticker/dtos/player.dto'

@Component({
  selector: 'app-player-card',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent {
    @Input()
    public playerInfo: PlayerDto;
}