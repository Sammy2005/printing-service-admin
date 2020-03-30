import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {environment} from '../../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class BaseHttpService {
    protected baseUrl = environment.base_notifications_url;

    private headers: HttpHeaders = new HttpHeaders({
        'Content-Type': 'application/json'
    });
    private uploadHeaders: HttpHeaders = new HttpHeaders({
        'Content-Type': 'multipart/form-data'
    });

    private pdfDownloadHeaders: HttpHeaders = new HttpHeaders({
        'Accept': 'application/pdf'
    });

    constructor(protected http: HttpClient) {
    }

    public post(url: String, data: any): Observable<any> {
        return this.http.post(`${this.baseUrl}${url}`, JSON.stringify(data), {headers: this.headers});
    }

    public upload(url: String, data: FormData): Observable<any> {
        return this.http.post(`${this.baseUrl}${url}`, data, {headers: this.uploadHeaders});
    }

    public put(url: String, data: any): Observable<any> {
        return this.http.put(`${this.baseUrl}${url}`, JSON.stringify(data), {headers: this.headers});
    }

    public patch(url: String, data: any): Observable<any> {
        return this.http.patch(`${this.baseUrl}${url}`, JSON.stringify(data), {headers: this.headers});
    }

    public delete(url: String): Observable<any> {
        return this.http.delete(`${this.baseUrl}${url}`);
    }

    public get(url: String): Observable<any> {
        return this.http.get(`${this.baseUrl}${url}`);
    }

    public download(url: String): Observable<any> {
        return this.http.get(`${this.baseUrl}${url}`, {headers: this.pdfDownloadHeaders});
    }
}
