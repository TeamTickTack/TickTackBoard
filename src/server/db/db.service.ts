import { Injectable } from '@nestjs/common';
import * as knex from 'knex';

// tslint:disable-next-line:no-var-requires
const config = require('../../../dbconfig.json');

@Injectable()
export class DbService {
   private knex: knex;
   constructor() {
      this.knex = knex(config);
   }
   public get k(): knex {
      return this.knex;
   }
}