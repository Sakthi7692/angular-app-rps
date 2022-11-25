import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class StockService {
    message: string = "Stock Value of Bank of America $1200000";
    constructor() { }

    getInfo(): string{
        return this.message;
    }
    
}