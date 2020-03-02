import { FileService } from '../services/file-service';
import { Team } from '../team/team';
import { Time } from '@angular/common';
import { Announcer } from '../announcer/announcer';

export class ScoreDisplay {

    homeTeam: Team;
    awayTeam: Team;

    period: number;
    time: Time;
    gameStartTime: string;


    playByPlay: Announcer;
    colorCommentary: Announcer;
    fieldReporter: Announcer;

}