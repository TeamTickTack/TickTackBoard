import { Module } from '@nestjs/common';
import { MessageService } from './message.service';
import { DbModule } from 'server/db/db.module';
import { TickerController } from './ticker.controller';
import { Repository } from './repostiory';
import { TickerService } from './ticker.service';
import { DataService } from './data.service';

@Module({
   imports: [DbModule],
   controllers: [TickerController],
   providers: [MessageService, TickerService, Repository, DataService],
})
export class TickerModule {

}