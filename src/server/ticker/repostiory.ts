import { DbService } from '../db/db.service';
import { Injectable } from '@nestjs/common';
import { Player } from './model/player';
import { Match } from './model/match';
import { Ranking } from './model/ranking';
import { Arena } from './model/arena';
import { Partie } from './model/partie';
import { Team } from './model/team';
@Injectable()
export class Repository {
    constructor(private readonly db: DbService) { }

    public async findPlayer(uid: string): Promise<Player> {
        return await this.db.k('player').first().where({ uid });
    }

    public async getPlayers(): Promise<Player[]> {
        return await this.db.k('player');
    }

    public async getTopScorer(): Promise<Player>  {
        return await this.db.k('player').orderBy('goals','desc').first();
    }

    public async getTeams(): Promise<Team[]> {
        return await this.db.k('alle_spieler').groupBy('team_name', 'team_id').select('team_name', 'team_id');
    }

    public async getPlayersOfTeam(teamUid: string): Promise<Player[]> {
        return await this.db.k('alle_spieler').where('team_id', teamUid);
    }

    public async findMatch(uid: string): Promise<Match> {
        return await this.db.k('match').first().where({ uid });
    }

    public async getMatches(): Promise<Player[]> {
        return await this.db.k('match');
    }

    public async findRanking(uid: string): Promise<Ranking>  {
        return await this.db.k('ranking').first().where({ uid });
    }

    public async findPartie(name: string): Promise<Partie[]>  {
        return await this.db.k('partie').where('homename', name).orWhere('guestname',name);
    }

    public async getRankings(): Promise<Ranking[]> {
        return await this.db.k('ranking');
    }

    public async getParties(): Promise<Partie[]>  {
        return await this.db.k('partie');
    }

    public async getArenas(): Promise<Arena[]> {
        return await this.db.k('arena');
    }

    public async findRanking(uid: string): Promise<Ranking> {
        return await this.db.k('ranking').first().where({ uid });
    }

    public async findArena(uid: string): Promise<Arena> {
        return await this.db.k('arena').first().where({ uid });
    }
}
