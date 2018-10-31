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

    public getPictureUrl() {
      return 'https://ticktack.blob.core.windows.net/ybpictures/' + this.playerInfo.firstName.replace(" ", "") + '_' + this.playerInfo.lastName.replace(" ", "") + '.png' 
    }
}