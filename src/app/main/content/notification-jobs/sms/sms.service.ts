import {Injectable} from '@angular/core';
import {BaseHttpService} from '../../../../core/services/base-http-service.service';
import {Observable} from 'rxjs';
import {NotificationJob} from '../notification-job';

@Injectable({
    providedIn: 'root'
})
export class SmsService {

    constructor(private baseHttpService: BaseHttpService) {

    }

    public all(): Observable<NotificationJob[]> {
        return this.baseHttpService.get('/notification-jobs/sms');
    }
}
