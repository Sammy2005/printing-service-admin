import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {NotificationJob} from '../notification-job';
import {EmailsService} from './emails.service';

@Injectable({
    providedIn: 'root'
})
export class EmailsResolver implements Resolve<Observable<NotificationJob[]>> {

    constructor(private emailsService: EmailsService) {

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Observable<NotificationJob[]>>
        | Promise<Observable<NotificationJob[]>> | Observable<NotificationJob[]> {
        return this.emailsService.all();
    }
}
