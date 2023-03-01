import { Component, OnInit, ViewChild, Inject, ɵConsole } from '@angular/core';
import { saveAs } from 'file-saver/FileSaver';
import { Team } from '../team/team';
import { Time } from '@angular/common';
import { Announcer } from '../announcer/announcer';
import { NgForm } from '@angular/forms';
import { FileService } from '../services/file-service';
import { Score } from '../score/score';

@Component({
  selector: 'keeper',
  templateUrl: './keeper.component.html',
  styleUrls: ['./keeper.component.scss']
})
export class KeeperComponent implements OnInit {

  private fileService: FileService;

  public homeTeam: Team;
  public awayTeam: Team;

  period: number;
  time: Time;
  gameStartTime: string;

  playByPlay: Announcer;
  colorCommentary: Announcer;
  fieldReporter: Announcer;
  player: Announcer;

  constructor(@Inject(FileService) fileService: FileService) {
    this.fileService = fileService;


    this.fileService.getScore().subscribe(val => {
      if (val != null) {
        //this.gameStartTime = val.gameStartTime;
        this.homeTeam = val.homeTeam;
        this.awayTeam = val.awayTeam;
        this.period = 1;
        this.playByPlay = val.playByPlay
        this.colorCommentary = val.colorCommentary
        this.fieldReporter = val.fieldReporter
        this.player = val.player
      }
    });
  }

  ngOnInit() {
  }

  // onChanges(): void {
  //   this.ngForm.valueChanges.subscribe(val => {
  //     console.log(val);
  //   });
  // }

  public updateScore(scores: any) {
    let value = scores.value;
    console.log(value);
    let score = new Score();
    score.period = value["period"];
    score.homeTeam = new Team(value["homeTeam-name"], value["homeTeam-logo"], value["homeTeam-color"], value["homeTeam-gamesWon"], value["homeTeam-score"], true);
    score.awayTeam = new Team(value["awayTeam-name"], value["awayTeam-logo"], value["awayTeam-color"], value["awayTeam-gamesWon"], value["awayTeam-score"], false);
    score.playByPlay = new Announcer(value["playByPlay-announcerName"], value["playByPlay-title"], value["playByPlay-subtitle"]);
    score.colorCommentary = new Announcer(value["colorCommentary-announcerName"], value["colorCommentary-title"], value["colorCommentary-subtitle"]);
    score.fieldReporter = new Announcer(value["fieldReporter-announcerName"], value["fieldReporter-title"], value["fieldReporter-subtitle"]);
    score.player = new Announcer(value["player-announcerName"], value["player-title"], value["player-subtitle"]);

    
    this.fileService.saveScore(score).subscribe(val => {
      console.log(val);
    });
  }
}
