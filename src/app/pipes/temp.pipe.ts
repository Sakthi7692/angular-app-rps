import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'temperature'
})

export class TempPipe implements PipeTransform {
    transform(value: any, fromTo: string): any {
        if (!fromTo) {
            throw 'Requires C2F or F2C';
        }
        return (fromTo === 'F2C') ? (value -32) * 5/9 : value *(9/5) + 32;
    }
}