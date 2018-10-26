import { MessagePart } from './model/messagePart';
import { Message } from './model/message';
import { PlayerRepository } from './player.repostiory';
import { Injectable } from '@nestjs/common';
import { any } from 'bluebird';
const { NlpManager } = require('node-nlp');

@Injectable()
export class MessageService {
   private readonly manager = new NlpManager({ languages: ['de'] });
   private readonly filePath = 'model.json';
   constructor(private readonly repositroy: Repository) {
      this.manager.load(this.filePath);
   }
   private async TrainModel() {
      this.manager.addNamedEntityText('player', 'Lukas Weber', ['de'], ['Lukas Weber', 'Luki', 'Weber']);
      this.manager.addNamedEntityText('player', 'Jonas Wyss', ['de'], ['Jonas Wyss', 'Jöni', 'Wyss']);
      this.manager.addNamedEntityText('playeraction', 'Tor', ['de'], ['Tor', 'Goal', 'Punkt']);
      this.manager.addNamedEntityText('playeraction', 'Pfosten', ['de'], ['Pfosten', 'Pfosten Schuss']);
      this.manager.addNamedEntityText('playeraction', 'Foul', ['de'], ['Foul']);
      this.manager.addDocument('de', '%player% hat ein %playeraction% geschossen.', 'shot');
      this.manager.addDocument('de', '%player% hat ein %playeraction% erzielt.', 'scoredGoal');
      this.manager.addDocument('de', '%player% hat ein %playeraction% gemacht.', 'scoredGoal');
      await this.manager.train();
   }

   public async Parse(message: Message): Promise<Array<MessagePart>> {
      let result = await this.manager.process(message.message);
      console.log(result);
      return undefined;
   }
}

// new MessageService(null).Parse({ message: 'Jonas hat getroffen!' });