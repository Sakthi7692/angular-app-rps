import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-about',
    template: `
        <h3>About Section</h3>
        <h2>We started here in Chennai</h2>
    `
})

export class AboutComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}