import { MessagePart } from './model/messagePart';
import { Message } from './model/message';
import { PlayerRepository } from './player.repostiory';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MessageService {
   constructor(private readonly playerRepo: PlayerRepository) {

   }
   public async Parse(message: Message): Promise<Array<MessagePart>> {
      this.playerRepo.FindPlayer('name');
      return undefined;
   }
}