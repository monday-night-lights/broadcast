import { Component, OnInit, Inject } from '@angular/core';
import { AnnouncerComponent } from '../announcer/announcer.component';
import { } from 'ngx-countdown';
import { Time } from '@angular/common';
import { TeamComponent } from '../team/team.component';
import { Team } from '../team/team';
import { Announcer } from '../announcer/announcer';
import { Http } from '@angular/http';
import { FileService } from '../services/file-service';
import { interval } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';

@Component({
  selector: 'score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss'],
  providers: [FileService]
})
export class ScoreComponent implements OnInit {

  fileService: FileService;
  homeTeam: Team;
  awayTeam: Team;

  period: number;
  time: Time;
  gameStartTime: string;

  playByPlay: Announcer;
  colorCommentary: Announcer;
  fieldReporter: Announcer;

  constructor(@Inject(FileService) fileService: FileService) {
    this.fileService = fileService;
  }

  ngOnInit() {
    interval(5000)
      .pipe(
        startWith(0),
        switchMap(() => this.fileService.getScore())
      )
      .subscribe(val => {
        if (val != null) {
          //this.gameStartTime = val.gameStartTime;
          this.homeTeam = val.homeTeam;
          this.awayTeam = val.awayTeam;
          this.period = 1;
          this.playByPlay = val.playByPlay
          this.colorCommentary = val.colorCommentary
          this.fieldReporter = val.fieldReporter
        }
      });
  }

  private _seriesLead: string;
  public get seriesLead(): string {
    if (this.homeTeam.gamesWon === this.awayTeam.gamesWon) {
      this._seriesLead = `Series Tied ${ this.homeTeam.gamesWon }-${ this.awayTeam.gamesWon }`;
    }
    else if (this.homeTeam.gamesWon > this.awayTeam.gamesWon) {
      this._seriesLead = `${ this.homeTeam.teamName } Lead Series ${ this.homeTeam.gamesWon }-${ this.awayTeam.gamesWon }`;
    }
    else if (this.homeTeam.gamesWon < this.awayTeam.gamesWon) {
      this._seriesLead = `${ this.awayTeam.teamName } Lead Series ${ this.awayTeam.gamesWon }-${ this.homeTeam.gamesWon }`;
    }
    else {
      this._seriesLead = "failure";
    }

    return this._seriesLead;
  }
}
