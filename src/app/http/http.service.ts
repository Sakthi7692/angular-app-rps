import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { debounceTime, filter, map } from 'rxjs';

const token: string = 'ssotoken-ssotoken';
const httpOptions: any = {
    headers: new HttpHeaders({
        'content-type': 'application/json',
        'ssotoken': token
    })
}

@Injectable({providedIn: 'root'})
export class HttpService {
    baseUrl: string = 'http://localhost:3000';
    constructor(private httpClient: HttpClient) { }
    
    getFoods(): any {
        return this.httpClient.get(this.baseUrl + '/api/food')
            .pipe(debounceTime(5000))
            .pipe(filter(res=>res!=undefined))
            .pipe(map(resp=>{
                return resp;
            }))

    }

    createFood(food: any): any {
        let body = JSON.stringify(food);
        return this.httpClient.post(this.baseUrl + '/api/food', body, httpOptions);

    }

    updateFood(food: any): any {
        let body = JSON.stringify(food);
        return this.httpClient.put(this.baseUrl + '/api/food/'+food.id, body, httpOptions);

    }

    deleteFood(food: any): any {
        return this.httpClient.delete(this.baseUrl + '/api/food/'+ food.id);
    }
}