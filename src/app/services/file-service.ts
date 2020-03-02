import { Component, OnInit, Injectable, Inject } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { saveAs } from 'file-saver/FileSaver';
import _jsonURL from '../../assets/data.json';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { Score } from '../score/score.js';

@Injectable()
export class FileService implements OnInit {

    private _jsonURL = 'assets/data.json';

    constructor(@Inject(Http) private http: Http) {
        var object;
        this.getJSON().subscribe(data => object = data, error => console.log(error));
    }

    public getJSON(): Observable<any> {
        return this.http.get(this._jsonURL).pipe(
            map((response: any) => response.json()));
    }

    public saveJSON(response: Score): void {
        const filename = this._jsonURL
        const blob = new Blob([JSON.stringify(response)], { type: 'text/json' });
        console.log(blob);
        saveAs(blob, filename);
    }

    public saveJSON2(score: Score): void {
        var file = new File([JSON.stringify(score)], this._jsonURL, {type: "text/plain;charset=utf-8", });
        // FileSaver.saveAs(file);
    }

    ngOnInit() {
    }
}