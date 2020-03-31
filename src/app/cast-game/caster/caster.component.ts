import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CastGameService } from 'src/app/services/castgame-service';
import { interval } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';

@Component({
  selector: 'caster',
  templateUrl: './caster.component.html',
  styleUrls: ['./caster.component.scss']
})
export class CasterComponent implements OnInit {

  points: number;
  show: number;
  white: boolean;
  results: Array<number>;

  constructor(private service: CastGameService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        this.show = params.show;
        this.white = params.white;
      });

    interval(1000).pipe(
      startWith(0),
      switchMap(() => this.service.getCastGameScore())
    ).subscribe(res => {
      this.results = res;
      this.points = this.results[this.show - 1];
    });
  }

  decrement(index: number) {
    this.results[index] = this.results[index] - 1;
    this.service.SaveCastGameScore(this.results).subscribe(val => {
      this.results = val;
    });;
  }

  increment(index: number) {
    this.results[index] = this.results[index] + 1;
    this.service.SaveCastGameScore(this.results).subscribe(val => {
      this.results = val;
    });;
  }
}
