import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-spa',
    templateUrl: './spa.component.html',
    styleUrls: ['./spa.component.css']
})

export class SPAComponent implements OnInit {
    title: string = 'Angular SPA Case Study';
    constructor() { }

    ngOnInit() { }
}