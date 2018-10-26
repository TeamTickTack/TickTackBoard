import { MessagePart } from './model/messagePart';
import { Message } from './model/message';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MessageService {
   constructor() {

   }
   public async Parse(message: Message): Promise<Array<MessagePart>> {
      return undefined;
   }
}