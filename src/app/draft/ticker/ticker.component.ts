import { Component, Inject, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { finalize, map, pluck, reduce, startWith, switchMap } from 'rxjs/operators';
import { resolve } from 'url';
import { DraftPick } from '../draft-pick/draft-pick';
import { DraftService } from '../draft.service';

@Component({
  selector: 'draft-ticker',
  templateUrl: './ticker.component.html',
  styleUrls: ['./ticker.component.scss'],
  providers: [DraftService]
})
export class DraftTickerComponent implements OnInit {

  draftService: DraftService;
  draftPicks: DraftPick[];
  tickerSpeed: number;

  constructor(@Inject(DraftService) draftService: DraftService) {
    this.draftService = draftService;
  }

  ngOnInit() {
    interval(1000)
      .pipe(
        startWith(0),
        switchMap(() => this.draftService.getDraftPicks())
      )
      .subscribe((x) => {
        this.draftPicks = x;

        var text = "Draft Results:  ";
        this.draftPicks.forEach((y) => {
          text += `${y.pickNumber}. ${y.name} - ${y.team}  `;
        });

        this.tickerSpeed = Math.max(this.draftPicks.length*3, 15);
      });
  }
}
