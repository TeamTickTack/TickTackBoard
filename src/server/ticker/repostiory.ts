import { DbService } from '../db/db.service';
import { Injectable } from '@nestjs/common';
import { Player } from './model/player';
@Injectable()
export class Repository {
    constructor(private readonly db: DbService) {

    }
    public async findPlayer(uid: string): Promise<Player> {
        return await this.db.k('player').first().where({ uid });
    }

    public async getPlayer(): Promise<Player[]>  {
        return await this.db.k('player');
    }
}