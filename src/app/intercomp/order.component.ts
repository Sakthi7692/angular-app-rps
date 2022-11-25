import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'order-processor',
    template: `
        <h2 class='bg-dark'>Order Processor</h2>
        <h2 class='text-danger container'>
            Buying {{stockSymbol}} of this {{quantity}} quantity.
        </h2>
        company: <input type="text" [(ngModel)]="stockSymbol" (keyup)="onChange($event)">
        <sms-text [stock]="stockSymbol"></sms-text>
    `
})

export class OrderComponent implements OnInit {
    @Output() throwStockBack: EventEmitter<any> = new EventEmitter();
    @Input() stockSymbol: any;
    @Input() quantity: any;
    constructor() { }

    ngOnInit() { }
    onChange(event: any) {
        this.throwStockBack.emit(event.target.value)
    }
}