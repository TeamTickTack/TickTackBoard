import { Component, Input } from '@angular/core';
import {CardDto} from "../../../../../server/ticker/dtos/card.dto";

@Component({
  selector: 'app-card-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
    @Input()
    public cardInfo: CardDto;
    constructor() {}
}