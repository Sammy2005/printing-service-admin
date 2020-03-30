import {Injectable} from '@angular/core';
import {BaseHttpService} from '../../../core/services/base-http-service.service';
import {Observable} from 'rxjs';
import {Printer} from './printer';

@Injectable({
    providedIn: 'root'
})
export class PrintersService {

    constructor(private baseHttpService: BaseHttpService) {

    }

    public all(): Observable<Printer[]> {
        return this.baseHttpService.get('/printers');
    }

    public create(printer: Printer): Observable<Printer> {
        return this.baseHttpService.post('/printers', printer);
    }

    public update(printer: Printer, id: number): Observable<Printer> {
        return this.baseHttpService.put(`/printers/${id}`, printer);
    }

    public delete(id: number): Observable<Printer> {
        return this.baseHttpService.delete(`/printers/${id}`);
    }
}
