import { Component, OnInit, Inject } from '@angular/core';
import { Time } from '@angular/common';
import { TeamComponent } from '../team/team.component';
import { Team } from '../team/team';
import { Announcer } from '../announcer/announcer';
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

  period: string;
  time: Time;
  gameStartTime: string;


  constructor(@Inject(FileService) fileService: FileService) {
    this.fileService = fileService;
    this.mapScore(this.fileService.getScore());
  }

  ngOnInit() {
    interval(5000)
      .pipe(
        startWith(0),
        switchMap(() => this.fileService.getScore())
      )
      .subscribe(this.mapScore);
  }

  mapScore = (val) => {
    if (val != null) {
      //this.gameStartTime = val.gameStartTime;
      this.homeTeam = val.homeTeam;
      this.awayTeam = val.awayTeam;

      switch (val.period) {
        case 1:
          this.period = "1st";
          break;
        case 2:
          this.period = "2nd";
          break;
        case 3:
          this.period = "3rd";
          break;
        default:
          this.period = "OT"
          break;
      }
    }
  }

  private _seriesLead: string;
  public get seriesLead(): string {
    if (this.homeTeam.gamesWon === this.awayTeam.gamesWon) {
      this._seriesLead = `Series Tied ${this.homeTeam.gamesWon}-${this.awayTeam.gamesWon}`;
    }
    else if (this.homeTeam.gamesWon > this.awayTeam.gamesWon) {
      this._seriesLead = `${this.homeTeam.teamName} Lead ${this.homeTeam.gamesWon}-${this.awayTeam.gamesWon}`;
    }
    else if (this.homeTeam.gamesWon < this.awayTeam.gamesWon) {
      this._seriesLead = `${this.awayTeam.teamName} Lead ${this.awayTeam.gamesWon}-${this.homeTeam.gamesWon}`;
    }
    else {
      this._seriesLead = "failure";
    }

    return this._seriesLead;
  }
}
