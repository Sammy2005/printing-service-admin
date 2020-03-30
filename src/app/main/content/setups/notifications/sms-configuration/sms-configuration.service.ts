import {Injectable} from '@angular/core';
import {BaseHttpService} from '../../../../../core/services/base-http-service.service';
import {SmsConfiguration} from './sms-configuration';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SmsConfigurationService {

    constructor(private baseHttpService: BaseHttpService) {

    }

    public getActiveConfiguration(): Observable<SmsConfiguration> {
        return this.baseHttpService.get(`/channels/sms/configurations/active`);
    }

    public create(smsConfiguration: SmsConfiguration): Observable<SmsConfiguration> {
        return this.baseHttpService.post(`/channels/sms/configurations`, smsConfiguration);
    }

    public update(smsConfiguration: SmsConfiguration): Observable<SmsConfiguration> {
        return this.baseHttpService.put(`/channels/sms/configurations/active`, smsConfiguration);
    }
}
