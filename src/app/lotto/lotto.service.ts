import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import _jsonURL from '../../assets/data.json';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { Score } from '../score/score.js';
import { Url } from 'url';

@Injectable()
export class LottoService {
  private serverlessAPI = 'https://9bgynci5o2.execute-api.us-east-2.amazonaws.com/dev/';
  private id = '2270df80-6679-11ea-83a9-6900520bea79';
  private apiUrl: Url;

  constructor(private httpClient: HttpClient) {
    this.apiUrl = new URL(this.serverlessAPI);
    this
  }

  public getLottoOrder(): Observable<Array<object>> {
    return this.httpClient.get<Score>(this.apiUrl.toString() + 'lotto/' + this.id).pipe(map(x => {
      return x.lottoBalls;
    }));
  }

  public SaveLottoOrder(lottoBall: string): Observable<Array<object>> {
    var lotto = { "team": lottoBall }

    if (lottoBall === '')
      lotto = null;

    var response = this.httpClient.put<Score>(this.apiUrl.toString() + 'lotto/' + this.id, JSON.stringify(lotto)).pipe(map(x => {
      return x.lottoBalls;
    }));
    return response;
  }
}