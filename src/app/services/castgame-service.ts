import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import _jsonURL from '../../assets/data.json';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { Score } from '../score/score';

@Injectable()
export class CastGameService {
    private serverlessAPI = 'https://9bgynci5o2.execute-api.us-east-2.amazonaws.com/dev/';
    private id = '2270df80-6679-11ea-83a9-6900520bea79';
    private apiUrl: string;

    constructor(private httpClient: HttpClient) {
        this.apiUrl = this.serverlessAPI, null;
    
    }

    public getCastGameScore(): Observable<Array<number>> {
        return this.httpClient.get<Score>(this.apiUrl + 'broadcast/' + this.id).pipe(map(x => {
            return x.castPoints;
        }));
    }

    public SaveCastGameScore(castGameScore: Array<number>): Observable<Array<number>> {
        var points = new Score();
        points.castPoints = castGameScore;
        var response = this.httpClient.put<Score>(this.apiUrl + 'cast-game/' + this.id, JSON.stringify(points)).pipe(map(x => {
            return x.castPoints;
        }));
        return response;
    }
}