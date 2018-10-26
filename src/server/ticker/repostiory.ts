import { DbService } from '../db/db.service';
import { Injectable } from '@nestjs/common';
import { Player } from './model/player';
import { Match } from './model/match';
import { Ranking } from './model/ranking';
@Injectable()
export class Repository {
    constructor(private readonly db: DbService) { }

    public async findPlayer(uid: string): Promise<Player> {
        return await this.db.k('player').first().where({ uid });
    }

    public async getPlayers(): Promise<Player[]>  {
        return await this.db.k('player');
    }

    public async findMatch(uid: string): Promise<Match>  {
        return await this.db.k('match').first().where({ uid });
    }

    public async getMatches(): Promise<Player[]>  {
        return await this.db.k('match');
    }

    public async findRanking(uid: string): Promise<Ranking>  {
        return await this.db.k('ranking').first().where({ uid });
    }

    public async getRankings(): Promise<Ranking[]>  {
        return await this.db.k('ranking');
    }

    public async getArenas() {
        const output = [];
        const arenas = (await this.db.k('match').select('arena')).map(a => a.arena);
        for (const arena of arenas) {
            if (!output.some(a => a.name === arena.name)) {
                output.push(arena);
            }
        }
        return output;
    }
}

//new Repository(new DbService()).findMatch('040A36A7-5E75-49E8-B2D9-0F3790572EA4');