import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'sms-text',
    template: `
    <div> Stock Msg from <h2>SMS Component</h2> {{stock}}</div>
    `
})

export class SMSComponent implements OnInit {
    
    @Input() stock: string = '';
    constructor() { }

    ngOnInit() { }
}