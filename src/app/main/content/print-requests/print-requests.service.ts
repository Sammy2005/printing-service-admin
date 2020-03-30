import {Injectable} from '@angular/core';
import {BaseHttpService} from '../../../core/services/base-http-service.service';
import {Observable} from 'rxjs';
import {PrintRequest} from './print-request';

@Injectable({
    providedIn: 'root'
})
export class PrintRequestsService {

    constructor(private baseHttpService: BaseHttpService) {

    }

    public all(): Observable<PrintRequest[]> {
        return this.baseHttpService.get('/print-requests');
    }

    public startPrintingJobs(id: number): Observable<PrintRequest[]> {
        return this.baseHttpService.patch(`/print-requests/${id}/printing-jobs/start`, {});
    }

    public printingJobs(id: number): Observable<PrintRequest[]> {
        return this.baseHttpService.get(`/print-requests/${id}/printing-jobs`);
    }

    public search(query: string): Observable<PrintRequest[]> {
        return this.baseHttpService.get(`/print-requests/search?query=${query}`);
    }

    public previewDocument(id: number): Observable<any> {
        return this.baseHttpService.get(`/print-requests/${id}/document`);
    }

    public downloadDocument(id: number): Observable<any> {
        return this.baseHttpService.download(`/print-requests/${id}/document`);
    }
}
