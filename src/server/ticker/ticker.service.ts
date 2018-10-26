import { Injectable } from '@nestjs/common';
import { Repository } from './repostiory';
import { MessageService } from './message.service';

@Injectable()
export class TickerService {
    constructor(private repository: Repository, messageService: MessageService) {}

    public proccessMessage() {

    }

    private checkPlayer(data) {

    }

    public checkStadion(data) {

    }
}