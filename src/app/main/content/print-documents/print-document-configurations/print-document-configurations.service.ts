import {Injectable} from '@angular/core';
import {BaseHttpService} from '../../../../core/services/base-http-service.service';
import {PrintDocumentConfiguration} from './print-document-configuration';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PrintDocumentConfigurationsService {

    constructor(private baseHttpService: BaseHttpService) {

    }

    public create(printDocumentConfiguration: PrintDocumentConfiguration): Observable<PrintDocumentConfiguration> {
        return this.baseHttpService.post('/print-document-configurations', printDocumentConfiguration);
    }

    public update(printDocumentConfiguration: PrintDocumentConfiguration, id: number): Observable<PrintDocumentConfiguration> {
        return this.baseHttpService.put(`/print-document-configurations/${id}`, printDocumentConfiguration);
    }

    public destroy(id: number): Observable<any> {
        return this.baseHttpService.delete(`/print-document-configurations/${id}`)
            .map(value => true);
    }
}
