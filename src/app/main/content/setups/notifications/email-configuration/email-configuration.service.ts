import {Injectable} from '@angular/core';
import {EmailConfiguration} from './email-configuration';
import {Observable} from 'rxjs';
import {BaseHttpService} from '../../../../../core/services/base-http-service.service';

@Injectable({
    providedIn: 'root'
})
export class EmailConfigurationService {

    constructor(private baseHttpService: BaseHttpService) {

    }

    public getActiveConfiguration(): Observable<EmailConfiguration> {
        return this.baseHttpService.get(`/channels/email/configurations/active`);
    }

    public create(emailConfiguration: EmailConfiguration): Observable<EmailConfiguration> {
        return this.baseHttpService.post(`/channels/email/configurations`, emailConfiguration);
    }

    public update(emailConfiguration: EmailConfiguration): Observable<EmailConfiguration> {
        return this.baseHttpService.put(`/channels/email/configurations/active`, emailConfiguration);
    }
}
