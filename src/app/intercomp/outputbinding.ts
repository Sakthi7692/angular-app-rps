import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-event',
    template: `
    <h2>Parent Component</h2>
    <div>
                   <table class="table table-bordered heading-hvr table-dark">
           <tbody>
           <tr>
                <td>Stock</td>
                <td>{{quote.stockSymbol}}</td>
            </tr>
            <tr>
                <td>Last Price</td>
                <td>{{quote.lastPrice | currency : 'USD'}}</td>
            </tr>
           </tbody>
        </table>
    </div>
    <price-quoter (throwStockBack)='catchBack($event)'></price-quoter> 
    <notify [info]="quote"></notify>
    `
})

export class OutputComponent implements OnInit {
    quote: IPriceQuote = {stockSymbol: '', lastPrice: 100}
    constructor() { }

    ngOnInit() { }

    catchBack(event: IPriceQuote) {
        this.quote = event;
    }
}
@Component({
    selector: 'price-quoter',
    template: ``
})

export class PriceQuoterComponent implements OnInit, ILogger {
    priceQuote: IPriceQuote = {
        stockSymbol: "BACI",
        lastPrice: 100
    }
    @Output() throwStockBack: EventEmitter<IPriceQuote> = new EventEmitter();
    constructor() { }

    ngOnInit() {
        window.setInterval(()=>{
            this.priceQuote.lastPrice = Math.round(Math.random() * 100);
            this.throwStockBack.emit(this.priceQuote);
        },1000)
     }
    

    log(msg: string): void {
        console.log(msg);
    }
}

export interface ILogger {
    log(msg: string): void;
}

export interface IPriceQuote {
    stockSymbol: string;
    lastPrice: number;
}


@Component({
    selector: 'notify',
    template: `
    <h3>Notified Values</h3>
    <div>
                   <table class="table table-bordered heading-hvr table-dark">
            <tbody>
            <tr>
                <td>Stock</td>
                <td>{{info.stockSymbol}}</td>
            </tr>
            <tr>
                <td>Last Price</td>
                <td>{{info.lastPrice}}</td>
            </tr>
            </tbody>
        </table>
    </div>
    `
})

export class NotifyComponent implements OnInit {
    @Input()
    info: IPriceQuote = {stockSymbol: '', lastPrice: 0}
    constructor() { }

    ngOnInit() { }
}