import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Team } from './team';

@Component({
  selector: 'team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit, OnChanges {

  @Input() team: Team;

  showGoalBanner: boolean = false;

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.team.previousValue === null) {
      return;
    }

    if (changes.team.currentValue.score !== changes.team.previousValue.score) {
      this.showGoalBanner = true;

      setTimeout(() => this.showGoalBanner = false, 10000)
    }
  }
}
