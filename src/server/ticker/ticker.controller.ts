import { Controller, Post, Body, Get } from '@nestjs/common';
import { TickerMessageDto } from './dtos/tickerMessage.dto';
import { MessageService } from './message.service';
import { KontextInfoDto } from './dtos/kontextInfo.dto';
import { TickerService } from './ticker.service';
import { TeamDto } from './dtos/team.dto';
import { DataService } from './data.service';

@Controller('/api/ticker')
export class TickerController {
    constructor(private readonly messageService: TickerService,
                private readonly dataService: DataService,
    ) {

    }
    @Post('/processMessage')
    public async processMessage(@Body() dto: TickerMessageDto): Promise<KontextInfoDto[]> {
        const response: KontextInfoDto[] = await this.messageService.proccessMessage(dto.message);
        return response;
    }
    @Get('/teams')
    public async getTeams(): Promise<Array<TeamDto>> {
        return this.dataService.getTeams();

    }
}