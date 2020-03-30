import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {PrintDocument} from './print-document';
import {PrintDocumentsService} from './print-documents.service';
import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class PrintDocumentsResolver implements Resolve<Observable<PrintDocument[]>> {

    constructor(private printDocumentsService: PrintDocumentsService) {

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Observable<PrintDocument[]>>
        | Promise<Observable<PrintDocument[]>> | Observable<PrintDocument[]> {
        return this.printDocumentsService.all();
        // return undefined;
    }
}
