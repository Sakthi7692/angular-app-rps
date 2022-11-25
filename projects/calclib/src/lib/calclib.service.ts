import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalclibService {

  constructor() { }

  calculate(p:number, n: number, r: number): number {
    return p * n * r / 100;
  }
}
