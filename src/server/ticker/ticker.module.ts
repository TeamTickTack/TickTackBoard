import { Module } from '@nestjs/common';
import { MessageService } from './message.service';
import { DbModule } from 'server/db/db.module';
import { TickerController } from './ticker.controller';
import { Repository } from './repostiory';

@Module({
   imports: [DbModule],
   controllers: [TickerController],
   providers: [MessageService, Repository],
})
export class TickerModule {

}