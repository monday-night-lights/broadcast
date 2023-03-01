import { Component, Inject, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';
import { DraftPick } from './draft-pick/draft-pick';
import { DraftService } from './draft.service';

@Component({
  selector: 'draft',
  templateUrl: './draft.component.html',
  styleUrls: ['./draft.component.scss'],
  providers: [DraftService]
})
export class DraftComponent implements OnInit {

  draftService: DraftService;
  draftPicks: DraftPick[];
  count = 0;

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
        this.count = this.draftPicks.length; 
      });
  }
}
