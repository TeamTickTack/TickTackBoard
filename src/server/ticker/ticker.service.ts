import { Injectable } from '@nestjs/common';
import { Repository } from './repostiory';

@Injectable()
export class TickerService {
    constructor(private repository: Repository) {}
}