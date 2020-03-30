import {Injectable} from '@angular/core';
import {NotificationJob} from '../notification-job';
import {Observable} from 'rxjs';
import {BaseHttpService} from '../../../../core/services/base-http-service.service';

@Injectable({
    providedIn: 'root'
})
export class EmailsService {

    constructor(private baseHttpService: BaseHttpService) {

    }

    public all(): Observable<NotificationJob[]> {
        return this.baseHttpService.get('/notification-jobs/emails');
    }
}
