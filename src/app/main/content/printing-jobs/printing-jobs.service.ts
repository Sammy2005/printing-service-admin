import {Injectable} from '@angular/core';
import {BaseHttpService} from '../../../core/services/base-http-service.service';
import {Observable} from 'rxjs';
import {PrintingJob} from './printing-job';
import {PrintFilter} from "../../../core/components/print-filter-dialog/print-filter";

@Injectable({
    providedIn: 'root'
})
export class PrintingJobsService {

    constructor(private baseHttpService: BaseHttpService) {

    }

    public all(): Observable<PrintingJob[]> {
        return this.baseHttpService.get('/printing-jobs');
    }

    public filter(printFilter: PrintFilter): Observable<PrintingJob> {
        return this.baseHttpService.post(`/printing-jobs/filter`, printFilter);
    }

    public startPrintJob(printingJob: PrintingJob): Observable<PrintingJob> {
        return this.baseHttpService.patch(`/printing-jobs/${printingJob.id}/start`, {});
    }

    public startBatchPrintJob(printFilter: PrintFilter): Observable<PrintingJob> {
        return this.baseHttpService.post(`/printing-jobs/start/batch`, printFilter);
    }

    public cancelPrintJob(printingJob: PrintingJob): Observable<PrintingJob> {
        return this.baseHttpService.patch(`/printing-jobs/${printingJob.id}/cancel`, {});
    }

    public printingJobLogs(id: number): Observable<PrintingJob> {
        return this.baseHttpService.get(`/printing-jobs/${id}/printing-job-logs`);
    }

    public destroy(id: number): Observable<PrintingJob> {
        return this.baseHttpService.delete(`/printing-jobs/${id}`);
    }

    public previewDocument(id: number): Observable<any> {
        return this.baseHttpService.get(`/printing-jobs/${id}/document`);
    }

    public downloadDocument(id: number): Observable<any> {
        return this.baseHttpService.download(`/printing-jobs/${id}/document`);
    }

    public search(query: string): Observable<PrintingJob[]> {
        return this.baseHttpService.get(`/printing-jobs/search?query=${query}`);
    }
}
