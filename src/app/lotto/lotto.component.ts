import { Component, OnInit, Inject } from '@angular/core';
import { interval } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';
import { LottoService } from './lotto.service';

@Component({
  selector: 'lotto',
  templateUrl: './lotto.component.html',
  styleUrls: ['./lotto.component.scss'],
  providers: [LottoService]
})
export class LottoComponent implements OnInit {

  lottoService: LottoService
  private draftOrder: string[]
  private picksLeft: number = 6;
  private teams = ["Nordiques", "Maroons", "North Stars", "Americans", "Tigers", "Whalers"];

  constructor(@Inject(LottoService) lottoService: LottoService) {
    this.lottoService = lottoService;
  }

  ngOnInit() {
    this.draftOrder = new Array();
    // "Nordiques", "Maroons", "North Stars", "Americans", "Tigers", "Whalers", "Golden Seals"
    this.draftOrder.push("Golden Seals");

    interval(1000)
      .pipe(
        startWith(0),
        switchMap(() => this.lottoService.getLottoOrder())
      )
      .subscribe(this.determineOrder);
  }

  determineOrder = (val) => {
    var winningBall= Array();

console.log(val);

    var group = this.groupBy(val, 'team');

    Object.keys(group).forEach((value, index, array) => {

      var picks = group[value].sort((a, b) => (a.time > b.time) ? 1 : -1);
      if (picks[1]) {
        winningBall.push(picks[1])
      }
    })

    this.draftOrder = winningBall.sort((a, b) => (a.time > b.time) ? 1 : -1).map((val) => val.team);
    this.draftOrder.unshift('Golden Seals');
  }

  groupBy = function (xs, key) {
    return xs.reduce(function (rv, x) {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  }
}
