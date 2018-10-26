import { Test } from '@nestjs/testing';
import { TickerController } from './ticker.controller';
import { TickerService } from './ticker.service';
import { TickerHelperDto } from './dtos/tickerHelper.dto';
import { MessageService } from './message.service';
import { TickerMessageDto } from './dtos/tickerMessage.dto';

describe('TickerController', () => {
//    let tickerController: TickerController;
//    let tickerService: TickerService;
//    let messageService: MessageService;
//    beforeEach(() => {
//       tickerService = new TickerService();
//       messageService = new MessageService();
//       tickerController = new TickerController(messageService);
//    });
//    describe('newMessage', () => {
//       it('should accept request', async () => {
//          const message = new TickerMessageDto();
//          message.message = 'Lukas schiesst ein Tor!';
//          const serviceReslut = new TickerHelperDto();
//          const parseMock = jest.spyOn(messageService, 'Parse').mockImplementation(() => serviceReslut);
//          expect(await tickerController.SubmitNewMessage(message)).toEqual(serviceReslut);
//          expect(parseMock).toHaveBeenCalled();
//       });
//    });
});