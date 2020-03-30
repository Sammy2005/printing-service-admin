import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {NotificationJob} from '../notification-job';
import {SmsService} from './sms.service';

@Injectable({
    providedIn: 'root'
})
export class SmsResolver implements Resolve<Observable<NotificationJob[]>> {

    constructor(private smsService: SmsService) {

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Observable<NotificationJob[]>>
        | Promise<Observable<NotificationJob[]>> | Observable<NotificationJob[]> {
        return this.smsService.all();
    }
}
