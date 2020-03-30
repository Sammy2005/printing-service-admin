import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {PrintingJob} from './printing-job';
import {PrintingJobsService} from './printing-jobs.service';
import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class PrintingJobsResolver implements Resolve<Observable<PrintingJob[]>> {

    constructor(private printingJobsService: PrintingJobsService) {

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Observable<PrintingJob[]>> | Promise<Observable<PrintingJob[]>> | Observable<PrintingJob[]> {
        return this.printingJobsService.all();
    }
}
