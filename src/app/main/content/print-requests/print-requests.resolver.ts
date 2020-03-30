import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {PrintRequest} from './print-request';
import {PrintRequestsService} from './print-requests.service';
import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class PrintRequestsResolver implements Resolve<Observable<PrintRequest[]>> {

    constructor(private printRequestsService: PrintRequestsService) {

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Observable<PrintRequest[]>> | Promise<Observable<PrintRequest[]>> | Observable<PrintRequest[]> {
        return this.printRequestsService.all();
    }

}
