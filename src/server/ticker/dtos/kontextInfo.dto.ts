import { ITickerHelperEntity } from './tickerHelperEntitiy.interface';
import { Player } from '../model/player';
import {PlayerDto} from './player.dto';
import {RefereeDto} from './referee.dto';
import {ClubDto} from './club.dto';
import {StadionDto} from './stadion.dto';
import {GoalDto} from './goal.dto';
import {CardDto} from './card.dto';
import {YbDto} from './yb.dto';

export class KontextInfoDto implements ITickerHelperEntity {

    playerInfo: PlayerDto;
    refereeInfo: RefereeDto;
    clubInfo: ClubDto;
    statdionInfo: StadionDto;
    goalInfo: GoalDto;
    cardInfo: CardDto;
    specialInfo: YbDto;

    static FromPlayer(player: Player): KontextInfoDto {
        return {
            // TODO getKontextInfoFromPlayer(player);
        } as KontextInfoDto;
    }
    static FromReferee(referee: string): KontextInfoDto { // TODO referee model
        return {
            // refereeInfo;
            // TODO getKontextInfoFromReferee(player);
        } as KontextInfoDto;
    }
    static FromClub(club: string): KontextInfoDto {
        return {
            // clubInfo;
            // TODO getKontextInfoFromClub(player);
        } as KontextInfoDto;
    }

    static FromStadion(stadion: string): KontextInfoDto {
        return {
            // stationInfo;
            // TODO getKontextInfoFromClub(player);
        } as KontextInfoDto;
    }

    static FromGoal(tor: string): KontextInfoDto {
        return {
            // goalInfo;
            // TODO getKontextInfoFromClub(player);
        } as KontextInfoDto;
    }

    static FromCard(card: string): KontextInfoDto {
        return {
            // cardInfo;
            // TODO getKontextInfoFromClub(player);
        } as KontextInfoDto;
    }

    static FromOther(special: string): KontextInfoDto {
        return {
            // specialInfo;
            // TODO getKontextInfoFromClub(player);
        } as KontextInfoDto;
    }

}