import {Injectable} from '@angular/core';
import {BaseHttpService} from '../../../core/services/base-http-service.service';
import {Observable} from 'rxjs';
import {PrintDocument} from './print-document';

@Injectable({
    providedIn: 'root'
})
export class PrintDocumentsService {

    constructor(private baseHttpService: BaseHttpService) {

    }

    public all(): Observable<PrintDocument[]> {
        return this.baseHttpService.get('/print-documents');
    }

    public create(printDocument: PrintDocument): Observable<PrintDocument> {
        return this.baseHttpService.post('/print-documents', printDocument);
    }

    public update(printDocument: PrintDocument, id: number): Observable<PrintDocument> {
        return this.baseHttpService.put(`/print-documents/${id}`, printDocument);
    }

    public delete(id: number): Observable<PrintDocument> {
        return this.baseHttpService.delete(`/print-documents/${id}`);
    }

    public find(id: number): Observable<PrintDocument> {
        return this.baseHttpService.get(`/print-documents/${id}`);
    }

}
