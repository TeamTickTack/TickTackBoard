import { Team } from '../model/team';

export class TeamDto {
    name: string;
    uid: string|any;
    shortName: string;
    image: string;
    static FromTeam(team: Team): TeamDto {
        return {
            name: team.name,
            uid: team.id,
            shortName: team.short_name,
            image: team.image,
        };
    }
}