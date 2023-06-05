import { Component, OnInit, Inject } from '@angular/core';
import { interval } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';
import { LottoService } from '../lotto.service';


@Component({
  selector: 'lotto-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  providers: [LottoService]
})
export class LottoAdminComponent implements OnInit {

  lottoService: LottoService
  private draftOrder: string[]
  private picksLeft: number = 6;
  private teams = ["Nordiques", "Scouts", "North Stars", "Americans", "Tigers", "Whalers"];

  constructor(@Inject(LottoService) lottoService: LottoService) {
    this.lottoService = lottoService;
  }

  ngOnInit() {
    this.draftOrder = new Array();

    interval(1000)
      .pipe(
        startWith(0),
        switchMap(() => this.lottoService.getLottoOrder())
      )
      .subscribe(this.determineOrder);
  }
  
  addBall = (team) => {
    console.log(team);
    this.lottoService.SaveLottoOrder(team).subscribe(val => {
    });;
  }

  determineOrder = (val) => {
    var winningBall= Array();

    var group = this.groupBy(val, 'team');

    Object.keys(group).forEach((value, index, array) => {

      var picks = group[value].sort((a, b) => (a.time > b.time) ? 1 : -1);
      if (picks[1]) {
        winningBall.push(picks[1])
      }
    })

    this.draftOrder = winningBall.sort((a, b) => (a.time > b.time) ? 1 : -1).map((val) => val.team);
    this.draftOrder.unshift('Golden Seals')
  }

  groupBy = function (xs, key) {
    return xs.reduce(function (rv, x) {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  }
}
