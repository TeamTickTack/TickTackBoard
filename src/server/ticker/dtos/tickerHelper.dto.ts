import { ITickerHelperEntity } from './tickerHelperEntitiy.interfac';

export class TickerHelperDto {
   type: TickerHelperType;
   content: ITickerHelperEntity;
}

export enum TickerHelperType {
   playerInfo,
}