import { Controller, Post, Body, Get } from '@nestjs/common';
import { TickerMessageDto } from './dtos/tickerMessage.dto';
import { MessageService } from './message.service';
import { Message } from './model/message';
import { ITickerHelperEntity } from './dtos/tickerHelperEntitiy.interface';
import { TickerHelperDto, TickerHelperType } from './dtos/tickerHelper.dto';
import { PlayerInfoDto } from './dtos/playerInfo.dto';

@Controller('/ticker')
export class TickerController {
   constructor(private readonly messageService: MessageService) {

   }
   @Post('/processMessage')
   public processMessage(@Body() dto: TickerMessageDto): Promise<TickerHelperDto[]> {
      const response: TickerHelperDto[] = [];
      const player = new TickerHelperDto();
      player.type = TickerHelperType.playerInfo;
    //   player.content = PlayerInfoDto.FromPlayer({ name: 'Lukas' });
      return Promise.resolve(response);
   }
}