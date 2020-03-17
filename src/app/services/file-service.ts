import { Component, OnInit, Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { saveAs } from 'file-saver/FileSaver';
import _jsonURL from '../../assets/data.json';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { Score } from '../score/score.js';
import { Url } from 'url';

@Injectable()
export class FileService {
    private serverlessAPI = 'https://9bgynci5o2.execute-api.us-east-2.amazonaws.com/dev/broadcast/2270df80-6679-11ea-83a9-6900520bea79';
    private apiUrl: Url;

    constructor(private httpClient: HttpClient) {
        this.apiUrl = new URL(this.serverlessAPI);
    }

    public getScore(): Observable<Score> {
        return this.httpClient.get<Score>(this.apiUrl.toString());
    }

    public saveScore(score: Score): Observable<Score> {
        console.log(score);

        var response = this.httpClient.put<Score>(this.apiUrl.toString(), JSON.stringify(score)).pipe(x => {
            console.log(x);
            return x;
        });
        return response;
    }
}