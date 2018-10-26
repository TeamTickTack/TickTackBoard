import { Module } from '@nestjs/common';
import { MessageService } from './message.service';
import { DbModule } from 'server/db/db.module';
import { TickerController } from './ticker.controller';
import { PlayerRepository } from './player.repostiory';

@Module({
   imports: [DbModule],
   controllers: [TickerController],
   providers: [MessageService, PlayerRepository],
})
export class TickerModule {

}