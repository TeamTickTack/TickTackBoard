import { Repository } from './repostiory';
import { Injectable } from '@nestjs/common';
import { TeamDto } from './dtos/team.dto';

@Injectable()
export class DataService {
    constructor(private readonly repository: Repository) {

    }
    public getTeams(): Promise<Array<TeamDto>> {
        return Promise.resolve([
            { name: "GCZ", uid: "123" },
            { name: 'BscYB', uid: "567" }
        ]);
    }
}