import { Component, Input } from '@angular/core';
import { PlayerTickerInfo } from 'app/app.component';

@Component({
  selector: 'app-player-card',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent {
    @Input()
    public playerInfo: PlayerTickerInfo;
}