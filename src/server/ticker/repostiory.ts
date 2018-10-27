import { DbService } from '../db/db.service';
import { Injectable } from '@nestjs/common';
import { Player } from './model/player';
import { Match } from './model/match';
import { Ranking } from './model/ranking';
import { Arena } from './model/arena';
import { Partie } from './model/partie';
import {Referee} from "./model/referee";
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

    public async getPlayersOfTeam(teamUid: string): Promise<Player[]> {
        return this.getPlayers();
        // return await this.db.k('player').where(team == teamuid);
    }

    public async getReferees(): Promise<Referee[]> {
        return await this.db.k('referee');
    }

    public async getTopGelbReferee(): Promise<Referee>  {
        return await this.db.k('referee').orderBy('yellow_cards','desc').first();
    }

    public async getTopRotReferee(): Promise<Referee>  {
        return await this.db.k('referee').orderBy('red_cards','desc').first();
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

    public async findArena(uid: string): Promise<Arena> {
        return await this.db.k('arena').first().where({ uid });
    }
}


//new Repository(new DbService()).findMatch('040A36A7-5E75-49E8-B2D9-0F3790572EA4');