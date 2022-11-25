import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-stock',
    templateUrl: './stock.component.html'
})

export class StockComponent implements OnInit {
    stock: any;
    quantity: any;
    constructor() { }

    ngOnInit() { }

    onInputEvent(event: any) {
        this.stock = event.target.value;
    }

    catchCallStock(event: any) {
        this.stock = event;
    }
}