import { Repository } from './repostiory';
import { Injectable } from '@nestjs/common';
import { TeamDto } from './dtos/team.dto';
import { PlayerDto } from './dtos/player.dto';
import { Partie } from './model/partie';
import { MatchInfoDto } from './dtos/matchInfo.dto';
import { MatchDto } from './dtos/match.dto';

@Injectable()
export class DataService {
    constructor(private readonly repository: Repository) {

    }
    public async getTeams(): Promise<Array<TeamDto>> {
        return (await this.repository.getTeams()).map(TeamDto.FromTeam);
    }
    public async getPlayersOfTeam(uid: string): Promise<PlayerDto[]> {
        return (await this.repository.getPlayersOfTeam(uid)).map(PlayerDto.fromPlayer);
    }

    public async getMatches(team1: string, team2: string): Promise<Array<MatchDto>> {
        return (await this.repository.getMatchesOfTeams(team1, team2)).map(MatchDto.fromPartie);
    }
}