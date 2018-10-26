import { ITickerHelperEntity } from './tickerHelperEntitiy.interface';

export class TickerHelperDto {
   type: TickerHelperType;
   content: ITickerHelperEntity;
}

export enum TickerHelperType {
   playerInfo,
}