import { MessagePart } from './model/messagePart';
import { Message } from './model/message';
import { Injectable } from '@nestjs/common';
import { any } from 'bluebird';
import { Repository } from './repostiory';
import { Player } from './model/player';
const { NlpManager } = require('node-nlp');

@Injectable()
export class MessageService {
   private readonly manager = new NlpManager({ languages: ['de'] });
   private readonly filePath = 'model.json';
   constructor(private readonly repositroy: Repository) {
      this.manager.load(this.filePath);
   }
   private async trainModel() {
      const players: Array<Player> = this.repositroy.getPlayers();
      players.forEach(player => {
         this.manager.addNamedEntityText('player', player.uid, ['de'], [player.first_name, player.last_name, player.nickname]);
      });
      this.manager.addNamedEntityText('goal', 'Tor', ['de'], ['Tor', 'Goal', 'Punkt']);
      this.manager.addDocument('de', '%player% hat ein %goal% geschossen.', 'goalScored');
      this.manager.addDocument('de', '%player% hat das %goal% getroffen.', 'goalScored');
      this.manager.addDocument('de', '%team% gehen dank einem %goal% von %player% in Führung', 'goalScored');
      this.manager.addDocument('de', '%player% trifft zum Ausgleich', 'goalScored');

      await this.manager.train();
      this.manager.save(this.filePath);
   }

   public async parse(message: Message): Promise<Array<MessagePart>> {
      let result = await this.manager.process(message.message);
      console.log(result);
      return undefined;
   }
}

// new MessageService(null).Parse({ message: 'Jonas hat getroffen!' });