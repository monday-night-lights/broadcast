import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import _jsonURL from '../../assets/data.json';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { Score } from '../score/score.js';
import { Url } from 'url';
import { DraftPick } from './draft-pick/draft-pick';

@Injectable()
export class DraftService {
  private serverlessAPI = 'https://9bgynci5o2.execute-api.us-east-2.amazonaws.com/dev/';
  private id = '2270df80-6679-11ea-83a9-6900520bea79';
  private apiUrl: Url;

  constructor(private httpClient: HttpClient) {
    this.apiUrl = new URL(this.serverlessAPI);
    this
  }

  public getDraftPicks(): Observable<Array<DraftPick>> {
    return this.httpClient.get<Score>(this.apiUrl.toString() + 'draft/' + this.id).pipe(map(x => {
      return x.draftPicks;
    }));
  }

  public saveDraftPicks(draftPicks: DraftPick[]): Observable<Array<DraftPick>> {
    var response = this.httpClient.put<Score>(this.apiUrl.toString() + 'draft/' + this.id, JSON.stringify(draftPicks)).pipe(map(x => {
      return x.draftPicks;
    }));

    return response;
  }

  public emptyDraftPicks():  Observable<Array<DraftPick>> {
    var response = this.httpClient.put<Score>(this.apiUrl.toString() + 'draft/' + this.id, JSON.stringify(null)).pipe(map(x => {
      return x.draftPicks;
    }));

    return response;
  }
}