import { Component, Input } from '@angular/core';
import { PlayerInfoDto } from '../../../../../server/ticker/dtos/playerInfo.dto'

@Component({
  selector: 'app-player-card',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent {
    @Input()
    public playerInfo: PlayerInfoDto;
}