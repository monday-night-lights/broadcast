import { Component, OnInit, Inject } from '@angular/core';
import { AnnouncerComponent } from '../announcer/announcer.component';
import { } from 'ngx-countdown';
import { Time } from '@angular/common';
import { TeamComponent } from '../team/team.component';
import { Team } from '../team/team';
import { Announcer } from '../announcer/announcer';
import { Http } from '@angular/http';
import { FileService } from '../services/file-service';

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
    this.fileService.getJSON().subscribe(val => {
      if(val != null) {
        console.log(val);
        this.gameStartTime = val.gameStartTime;
        this.awayTeam = val.awayTeam;
        this.homeTeam = val.homeTeam;
        this.period = 1;
        this.playByPlay = val.playByPlay
        this.colorCommentary = val.colorCommentary
        this.fieldReporter = val.fieldReporter
      }
    });
  }

  ngOnInit() {
  }

}
