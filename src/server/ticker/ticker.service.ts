import { Injectable } from '@nestjs/common';
import { Repository } from './repostiory';
import { MessageService, ParsedMessage } from './message.service';
import { KontextInfoDto } from './dtos/kontextInfo.dto';
import { PlayerDto } from './dtos/player.dto';

@Injectable()
export class TickerService {
    constructor(private repository: Repository, private readonly messageService: MessageService) { }

    public async proccessMessage(message: string): Promise<Array<KontextInfoDto>> {
        const result: ParsedMessage = await this.messageService.parse(message);
        const infos = [];
        if (result) {
            infos.push(...await this.checkPlayer(result));
            infos.push(...await this.checkStadion(result));
        }
        return infos;
    }

    private async checkPlayer(data: ParsedMessage): Promise<Array<KontextInfoDto>> {
        const info = [];
        const foundPlayers: Array<string> = [];
        for (const player of data.entities) {
            if (player.entity !== 'player')
                continue;
            const playerUid = player.option;
            if (playerUid) {
                if (!foundPlayers.some((u) => u === playerUid)) {
                    foundPlayers.push(playerUid);
                    info.push(PlayerDto.fromPlayer(await this.repository.findPlayer(playerUid)));
                }
            }
        }
        return info;
    }

    public async checkStadion(data): Promise<Array<KontextInfoDto>> {
        return [];
    }
}