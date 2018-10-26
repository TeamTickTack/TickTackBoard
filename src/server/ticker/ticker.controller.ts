import { Controller, Post, Body } from '@nestjs/common';
import { TickerMessageDto } from './dtos/tickerMessage.dto';
import { MessageService } from './message.service';
import { Message } from './model/message';
import { ITickerHelperEntity } from './dtos/tickerHelperEntitiy.interfac';
import { TickerHelperDto } from './dtos/tickerHelper.dto';

@Controller('/ticker')
export class TickerController {
   constructor(private readonly messageService: MessageService) {

   }
   @Post('/newMessage')
   public SubmitNewMessage(@Body() dto: TickerMessageDto): Promise<any>{
      return this.messageService.Parse(new Message(dto.message));
   }

}