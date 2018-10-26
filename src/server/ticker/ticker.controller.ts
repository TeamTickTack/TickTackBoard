import { Controller, Post, Body, Get } from '@nestjs/common';
import { TickerMessageDto } from './dtos/tickerMessage.dto';
import { MessageService } from './message.service';
import { KontextInfoDto } from './dtos/kontextInfo.dto';
import { TickerService } from './ticker.service';

@Controller('/ticker')
export class TickerController {
   constructor(private readonly messageService: TickerService) {

   }
   @Post('/processMessage')
   public async processMessage(@Body() dto: TickerMessageDto): Promise<KontextInfoDto[]> {
      const response: KontextInfoDto[] = await this.messageService.proccessMessage(dto.message);
      return response;
   }
}