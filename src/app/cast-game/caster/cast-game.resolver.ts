import { CastGameService } from 'src/app/services/castgame-service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RouterStateSnapshot, ActivatedRouteSnapshot, Resolve } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class CastGameResolver implements Resolve<Array<number>> {
    constructor(private service: CastGameService) { }

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<any> | Promise<any> | any {
        return this.service.getCastGameScore();
    }
}
