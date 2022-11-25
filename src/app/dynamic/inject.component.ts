import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { StockComponent } from './stock.component';

@Component({
    selector: 'app-inject',
    template: `
    <h2 class="container text-center"> Injector Component</h2>
    <button class="btn btn-primary" (click)="handler()"> Get Injector</button>
    `
})

export class InjectComponent implements OnInit {
    constructor(private vcRef: ViewContainerRef) { }

    ngOnInit() { }

    handler() {
        const ref = this.vcRef.createComponent(StockComponent);
        ref.changeDetectorRef.detectChanges();
    }
}