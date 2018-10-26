import { ITickerHelperEntity } from './tickerHelperEntitiy.interface';
import { Player } from '../model/player';

export class PlayerInfoDto implements ITickerHelperEntity {
   playerName: string;
   static FromPlayer(player: Player): PlayerInfoDto {
   return {
         playerName: player.name,
      } as PlayerInfoDto;
   }
}
