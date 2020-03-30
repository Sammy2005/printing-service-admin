import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Printer} from './printer';
import {PrintersService} from './printers.service';

@Injectable({
    providedIn: 'root'
})
export class PrintersResolver implements Resolve<Observable<Printer[]>> {

    constructor(private printersService: PrintersService) {

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Observable<Printer[]>>
        | Promise<Observable<Printer[]>> | Observable<Printer[]> {
        return this.printersService.all();
    }
}
