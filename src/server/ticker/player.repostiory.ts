import { DbService } from '../db/db.service';
import { Injectable } from '@nestjs/common';
@Injectable()
export class PlayerRepository {
   constructor(private readonly db: DbService) {

   }
   public async FindPlayer(name: string) {
      this.db.k.select('player');
   }
}