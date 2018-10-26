import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TickerModule } from './ticker/ticker.module';

@Module({
  imports: [TickerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
