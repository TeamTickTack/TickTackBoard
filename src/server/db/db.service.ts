import { Injectable } from '@nestjs/common';
import * as knex from 'knex';
@Injectable()
export class DbService {
   private knex: knex;
   constructor() {
      this.knex = knex({
         client: 'mssql',
         connection: {
            host: 'ticktack.database.windows.net',
            user: 'ticktackadmin',
            password: 'Ticktack18',
            database: 'TickTack',
         },
      });
   }
   public get k(): knex {
      return this.knex;
   }
}