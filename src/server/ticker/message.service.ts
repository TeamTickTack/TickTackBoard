import { MessagePart } from './model/messagePart';
import { Injectable } from '@nestjs/common';
import { Repository } from './repostiory';
import { Player } from './model/player';
import { existsSync } from 'fs';
import { Arena } from './model/arena';
import { DbService } from '../../server/db/db.service';
import {Ranking} from "./model/ranking";
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
            const synonyms = [];
            if (player.first_name)
                synonyms.push(player.first_name);
            if (player.last_name)
                synonyms.push(player.last_name);
            if (player.nickname)
                synonyms.push(player.nickname);
            this.manager.addNamedEntityText('player', player.uid, ['de'], synonyms);
        });

        const arenas: Array<Arena> = await this.repositroy.getArenas();
        arenas.forEach(arena => {
            const synonyms = [arena.city];
            synonyms.push(...arena.name.split(', '));
            synonyms.push(arena.name);
            this.manager.addNamedEntityText('arena', arena.uid, ['de'], synonyms);
        });

        const rankings: Array<Ranking> = await this.repositroy.getRankings();
        rankings.forEach(ranking => {
            const synonyms = [ranking.short_name];
            synonyms.push(ranking.name);
            this.manager.addNamedEntityText('club', ranking.uid, ['de'], synonyms);
        });

        this.manager.addNamedEntityText('goal', 'Tor', ['de'], ['Tor', 'Goal', 'Punkt']);

        this.manager.addNamedEntityText('penalty', 'penalty', ['de'], ['Elfmeter', 'Strafschuss','Penalty']);

        this.manager.addDocument('de', '%player% schiesst ein Tor', 'goalScored');
        this.manager.addDocument('de', '%player% hat ein %goal% geschossen.', 'goalScored');
        this.manager.addDocument('de', '%player% hat das %goal% getroffen.', 'goalScored');
        this.manager.addDocument('de', 'Ein %goal% von %player%', 'goalScored');
        this.manager.addDocument('de', '%team% gehen dank einem %goal% von %player% in Führung', 'goalScored');
        this.manager.addDocument('de', 'heute spielt %team%', 'team');
        this.manager.addDocument('de', '%player% trifft zum Ausgleich', 'goalScored');
        this.manager.addDocument('de', '%player% trifft die Latte', 'latte');
        this.manager.addDocument('de', 'Ein Foul von %player%', 'foul');
        this.manager.addDocument('de', '%player% wird verweisst', 'yellowCard');
        this.manager.addDocument('de', '%player% wird vom Platz verwiesen', 'redCard');
        this.manager.addDocument('de', '%player% bekommt Gelb', 'yellowCard');
        this.manager.addDocument('de', 'Gelb für %player%', 'yellowCard');
        this.manager.addDocument('de', '%player% bekommt Rot', 'redCard');
        this.manager.addDocument('de', '%player% Rote Karte', 'redCard');
        this.manager.addDocument('de', '%player% Gelbe Karte', 'yellowCard');
        this.manager.addDocument('de', '%player% trifft', 'goalScored');
        this.manager.addDocument('de', '%player% trifft die Latte', 'latte');

        this.manager.addDocument('de', '%arena%.', 'arena');
        this.manager.addDocument('de', '%arena% Anpfiff', 'arena');
        this.manager.addDocument('de', '%team%', 'team');
        await this.manager.train();
        this.manager.save(this.filePath);
    }

    public async parse(message: string): Promise<ParsedMessage> {
        const result = await this.manager.process(message);
        return result as ParsedMessage;
    }
}

export interface ParsedMessage {
    utterance: string;
    classification: Array<ParsingClassification>;
    score: number;
    intent: string;
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

const s = new MessageService(new Repository(new DbService()));

