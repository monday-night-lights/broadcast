import { Time } from '@angular/common';
import { Team } from '../team/team';
import { Announcer } from '../announcer/announcer';

export class Score {
    homeTeam: Team;
    awayTeam: Team;
  
    period: number;
    time: Time;
  
    playByPlay: Announcer;
    colorCommentary: Announcer;
    fieldReporter: Announcer;
}