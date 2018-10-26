import { Controller, Post, Body } from '@nestjs/common';
import { TickerMessageDto } from './dtos/tickerMessage.dto';
import { MessageService } from './message.service';
import { Message } from './model/message';
import { ITickerHelperEntity } from './dtos/tickerHelperEntitiy.interfac';
import { TickerHelperDto, TickerHelperType } from './dtos/tickerHelper.dto';
import { PlayerInfoDto } from './dtos/playerInfo.dto';

@Controller('/ticker')
export class TickerController {
   constructor(private readonly messageService: MessageService) {

   }
   @Post('/newMessage')
   public SubmitNewMessage(@Body() dto: TickerMessageDto): Promise<TickerHelperDto> {
      const response = new TickerHelperDto();
      response.type = TickerHelperType.playerInfo;
      response.content = PlayerInfoDto.FromPlayer({ name: "Lukas" });
      return Promise.resolve(response);
      // return this.messageService.Parse(new Message(dto.message));
   }

}