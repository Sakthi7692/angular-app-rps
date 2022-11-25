import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms'
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, switchMap, debounceTime, catchError } from 'rxjs';

@Component({
    selector: 'app-weather',
    template: `
        <div class="container bg-warning text-center">
            <h3>Live Weather Control
            </h3>
            City: <input type="text" [formControl]="search">
            <h3 *ngIf="errorMsg!=''">{{errorMsg}}</h3>
            <h3 *ngIf="loading">Loading please wait.....</h3>
            <h3 *ngIf="!loading && errorMsg==''">
                Weather report loading for {{city}} and the temperature is {{temperature }}
            </h3>
        </div>
    `
})

export class WeatherComponent implements OnInit {
    search: FormControl = new FormControl();
    city: string | undefined;
    temperature: string | undefined;
    description: string | undefined;
    loading: boolean = true;
    errorMsg: string = '';

    private basicWeatherUrl: string = 'http://api.openweathermap.org/data/2.5/weather?q=';
    private urlSuffix: string = '&units=imperial&appid=ca3f6d6ca3973a518834983d0b318f73';

    constructor(private http: HttpClient) {
        this.search.valueChanges
            .pipe(map(data=>{
                this.loading= true;
                this.errorMsg = '';
                return data;
            }))
            .pipe(debounceTime(2000))
            .pipe(switchMap((city: string, )=>{
                return this.getWeather(city);
            }))
            .subscribe({
                next: (resp: any) => {
                    console.log(resp);
                    this.errorMsg = '';
                    this.city = resp.name;
                    this.temperature = resp.main.temp;
                    this.loading = false;
                }, 
                error: (err: any) => {
                    this.errorMsg = err.error.message + '. Please refine your search'
                    this.loading = false;
                },
                complete: () => {
                    console.log('completed');
                    return of([]);
                }
            })
     }

    ngOnInit() { 
        this.search.setValue('Chennai');
    }

    getWeather(city: string): Observable<Array<string>> {
        return this.http.get(this.basicWeatherUrl + city + this.urlSuffix)
                .pipe(map((resp: any)=>{
                    return resp;
                }));
      //  return of([''])
    }
}