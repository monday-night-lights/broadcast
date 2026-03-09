import { Component, OnInit, Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import _jsonURL from '../../assets/data.json';
import { Observable } from 'rxjs';
import { Score } from '../score/score.js';

@Injectable()
export class FileService {
    private serverlessAPI = 'https://9bgynci5o2.execute-api.us-east-2.amazonaws.com/dev/broadcast/2270df80-6679-11ea-83a9-6900520bea79';
    private apiUrl: string;

    constructor(private httpClient: HttpClient) {
        this.apiUrl = this.serverlessAPI;
    }

    public getScore(): Observable<Score> {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        });

        return this.httpClient.get<Score>(this.apiUrl, { headers });
    }

    public saveScore(score: Score): Observable<Score> {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        });

        return this.httpClient.put<Score>(this.apiUrl, JSON.stringify(score), { headers });
    }
}