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

  homePlayersOnIce: number;
  awayPlayersOnIce: number;

  homePP: boolean;
  awayPP: boolean;

  period: string;
  time: Time;
  gameStartTime: string;
  numericalStrength: string;

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

      debugger;

      this.homePlayersOnIce = val.homeTeam?.playersOnIce ?? 5;
      this.awayPlayersOnIce = val.awayTeam?.playersOnIce ?? 5;

      this.homePP = false;
      this.awayPP = false;

      if (this.homePlayersOnIce > this.awayPlayersOnIce) {
        this.homePP = true;

        if (this.homePlayersOnIce === 6 && this.awayPlayersOnIce === 5) {
          this.numericalStrength = "EN";
        }
        else {
          this.numericalStrength = `${this.homePlayersOnIce} on ${this.awayPlayersOnIce}`;
        }
      }
      else if (this.homePlayersOnIce < this.awayPlayersOnIce) {
        this.awayPP = true;

        if (this.awayPlayersOnIce === 6 && this.homePlayersOnIce === 5) {
          this.numericalStrength = "EN";
        }
        else {
          this.numericalStrength = `${this.awayPlayersOnIce} on ${this.homePlayersOnIce}`;
        }
      }
      else {
        switch (this.homePlayersOnIce) {
          case 4:
            this.numericalStrength = "4 on 4";
            this.homePP = true;
            break;
          case 3:
            this.numericalStrength = "3 on 3";
            this.homePP = true;
            break
          default:
            this.numericalStrength = "Even Strength";
            break;
        }
      }

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
          this.period = "OT";
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
