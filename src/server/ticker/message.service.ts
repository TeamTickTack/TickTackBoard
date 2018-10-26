import { MessagePart } from './model/messagePart';
import { Message } from './model/message';
import { Injectable } from '@nestjs/common';
import { any } from 'bluebird';
import { Repository } from './repostiory';
import { Player } from './model/player';
import { existsSync } from 'fs';
import { DbService } from 'server/db/db.service';
const { NlpManager } = require('node-nlp');

@Injectable()
export class MessageService {
   private readonly manager = new NlpManager({ languages: ['de'] });
   private readonly filePath = 'model.json';
   constructor(private readonly repositroy: Repository) {
      if (existsSync(this.filePath))
         this.manager.load(this.filePath);
      else {
         this.trainModel();
      }
   }
   public async trainModel() {
      const players: Array<Player> = await this.repositroy.getPlayers();
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

// new MessageService(new Repository(new DbService())).trainModel();