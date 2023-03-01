import { Time } from '@angular/common';
import { Team } from '../team/team';
import { Announcer } from '../announcer/announcer';
import { DraftPick } from '../draft/draft-pick/draft-pick';

export class Score {
    homeTeam: Team;
    awayTeam: Team;

    period: number;
    timeLeft: Time;

    playByPlay: Announcer;
    colorCommentary: Announcer;
    fieldReporter: Announcer;
    player: Announcer;

    castPoints: Array<number>;
    lottoBalls: Array<object>;
    draftPicks: Array<DraftPick>;
}