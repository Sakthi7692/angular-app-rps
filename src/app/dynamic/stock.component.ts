import { Component, OnInit } from '@angular/core';
import { StockService } from './stock.service';

@Component({
    template: `
        <div class="bg-warning">
            <h2> Stock Info {{invoke()}}</h2>
        </div>
    `
})

export class StockComponent implements OnInit {
    constructor(private stock: StockService) { }

    ngOnInit() { }

    invoke() {
        return this.stock.getInfo();
    }
}