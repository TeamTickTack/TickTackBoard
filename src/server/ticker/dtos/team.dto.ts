import { Team } from '../model/team';

export class TeamDto {
    name: string;
    uid: string;
    static FromTeam(team: Team): TeamDto {
        return {
            name: team.team_name,
            uid: team.team_id,
        };
    }
}