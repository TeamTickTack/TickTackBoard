import { Component, Input } from '@angular/core';
import { ClubDto } from '../../../../../server/ticker/dtos/club.dto'

@Component({
  selector: 'app-club-card',
  templateUrl: './club.component.html',
  styleUrls: ['./club.component.css']
})
export class ClubComponent {
    @Input()
    public clubInfo: ClubDto;
}