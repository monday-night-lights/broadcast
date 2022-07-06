import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { interval } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';
import { DraftPick } from '../draft-pick/draft-pick';
import { DraftService } from '../draft.service';

@Component({
  selector: 'draft-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  providers: [DraftService]
})
export class DraftAdminComponent implements OnInit {

  @ViewChild('player', {static: true}) playerElement: ElementRef;
  draftService: DraftService;
  draftPicks: DraftPick[];
  count = 1;

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
        this.count = this.draftPicks.length+1
      });
  }

  pushPick(team: string) {
    if(this.playerElement.nativeElement.value === '')
    {
      this.playerElement.nativeElement.focus();
      return;
    }

    var pick = new DraftPick();
    pick.name = this.playerElement.nativeElement.value;
    pick.pickNumber = this.count;
    pick.team = team;
    
    this.draftPicks.push(pick);
    this.draftService.saveDraftPicks(this.draftPicks).subscribe((val) => {
      this.count++;
      this.playerElement.nativeElement.value = "";
      this.draftPicks = val;
      this.playerElement.nativeElement.focus();
    });
  }

  popPick() {
    this.draftPicks.pop();
    
    this.draftService.saveDraftPicks(this.draftPicks).subscribe((val) => {
      this.count--;
      if (this.count < 1) {
        this.count = 1;
      }
      this.draftPicks = val;
    });
    
    this.playerElement.nativeElement.focus();
  }

  emptyDraft() {
    this.count = 1;
    this.draftService.emptyDraftPicks().subscribe();
    this.playerElement.nativeElement.focus();
  }
}
