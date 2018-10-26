import { MessagePart } from './model/messagePart';
import { Message } from './model/message';
import { Injectable } from '@nestjs/common';
import { Repository } from './repostiory';
import { Player } from './model/player';
import { existsSync } from 'fs';
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
         let synonyms = [];
         if (player.first_name)
            synonyms.push(player.first_name);
         if (player.last_name)
            synonyms.push(player.last_name);
         if (player.nickname)
            synonyms.push(player.nickname);
         this.manager.addNamedEntityText('player', player.uid, ['de'], synonyms);
      });
      this.manager.addNamedEntityText('goal', 'Tor', ['de'], ['Tor', 'Goal', 'Punkt']);
      this.manager.addDocument('de', '%player% hat ein %goal% geschossen.', 'goalScored');
      this.manager.addDocument('de', '%player% hat das %goal% getroffen.', 'goalScored');
      this.manager.addDocument('de', '%team% gehen dank einem %goal% von %player% in Führung', 'goalScored');
      this.manager.addDocument('de', '%player% trifft zum Ausgleich', 'goalScored');
      this.manager.addDocument('de', '%player% trifft die Latte', 'latte');
      this.manager.addDocument('de', 'Ein Foul von %player%', 'foul');

      await this.manager.train();
      this.manager.save(this.filePath);
   }

   public async parse(message: Message): Promise<ParsedMessage> {
      let result = await this.manager.process(message.message);

      return result as ParsedMessage;
   }
}

export interface ParsedMessage {
   utterance: string;
   classification: Array<ParsingClassification>;
   score: number;
   entities: Array<ParsingEntity>;
   sentiment: ParsingSentiment;
}

export interface ParsingClassification {
   label: string;
   value: number;
}

export interface ParsingEntity {
   option: string;
   entity: string;
   utteranceText: string;
   accuracy: number;
}

export interface ParsingSentiment {
   score: number;
   numWord: number;
   numHits: number;
}
