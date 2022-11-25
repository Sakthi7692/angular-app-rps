import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class MessagingService {
    /**
     * Hold state
     * multicast
     * to multiple observers
     * when state change
    */
    private subj = new Subject<any>();
    constructor(private httpClient: HttpClient) { }

    /**
     * 
     * @param params Produccer
     */
    sendMessage(params: string) {
        this.subj.next({result: 'Response from BOA Server ' + params})
    }

    getCustomers(city: string) {

    }
    
    clearMessage() {
        this.subj.next({});
    }

    /**
     * Consumer
     */
    getMessage(): Observable<any> {
        return this.subj.asObservable();
    }
}