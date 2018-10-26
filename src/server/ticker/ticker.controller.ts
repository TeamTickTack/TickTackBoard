import { Controller, Post, Body, Get } from '@nestjs/common';
import { TickerMessageDto } from './dtos/tickerMessage.dto';
import { MessageService } from './message.service';
import { Message } from './model/message';
import { KontextInfoDto } from './dtos/kontextInfo.dto';

@Controller('/ticker')
export class TickerController {
   constructor(private readonly messageService: MessageService) {

   }
   @Post('/processMessage')
   public processMessage(@Body() dto: TickerMessageDto): Promise<KontextInfoDto[]> {
      const response: KontextInfoDto[] = [];

    //   player.content = PlayerInfoDto.FromPlayer({ name: 'Lukas' });
      return Promise.resolve(response);
   }
}