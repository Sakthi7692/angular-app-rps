import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-ngcontent',
    template: `
        <h2>Button Demo with ng-content</h2>
        <app-button>
            <b>submit</b>
        </app-button>

        <h2>Button with click event</h2>

        <app-button (click)='btnClicked($event)'>
            <i>send data</i>
        </app-button>

        <h3>Multiple Slots</h3>
        <app-card *ngFor="let item of items;">
            <header>
                <h3>Card Slot {{item}}</h3>
            </header>
            <content>One frame to show the card slot</content>
            <footer><b>Powered by Sakthi</b></footer>
        </app-card>
    `
})

export class ParentComponent implements OnInit {
    items: any = [1,2,3];
    constructor() { }

    ngOnInit() { }

    btnClicked(event: any) {
        alert('Clicked Me');
    }
}