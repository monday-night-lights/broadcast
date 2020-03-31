import { Component, OnInit, Inject } from '@angular/core';
import { FileService } from '../services/file-service';
import { interval } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';
import { Announcer } from '../announcer/announcer';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-announcers',
  templateUrl: './announcers.component.html',
  styleUrls: ['./announcers.component.scss']
})
export class AnnouncersComponent implements OnInit {
  fileService: FileService;

  playByPlay: Announcer;
  colorCommentary: Announcer;
  fieldReporter: Announcer;
  player: Announcer;

  showPlay: boolean;
  showColor: boolean;
  showField: boolean;

  constructor(@Inject(FileService) fileService: FileService, private route: ActivatedRoute) { 
    this.fileService = fileService;
    this.mapScore(this.fileService.getScore());
  }


  ngOnInit() {
    this.route.queryParams
    .subscribe(params => {
      this.showPlay = params.showPlay;
      this.showColor = params.showColor;
      this.showField = params.showField;
    });

    interval(5000)
      .pipe(
        startWith(0),
        switchMap(() => this.fileService.getScore())
      )
      .subscribe(this.mapScore);
  }

  mapScore = (val) => {
    if (val != null) {
      this.playByPlay = val.playByPlay;
      this.colorCommentary = val.colorCommentary;
      this.fieldReporter = val.fieldReporter;
      this.player = val.player;
    }
  }

  public get interviewing() : boolean {
    console.log(this.player);
    console.log(this.player.announcerName);
    console.log(this.player.announcerName !== null);
    console.log(this.player.announcerName.trim() !== null);
    return this.player.announcerName !== null && this.player.announcerName.trim() !== "";
  }
}
