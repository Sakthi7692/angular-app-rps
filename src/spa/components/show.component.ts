import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-show',
    template: `
        <h2 class='bg-warning'>You have selected {{name}}</h2>
    `
})

export class ShowComponent implements OnInit {
    name: string = '';
    constructor(private router: ActivatedRoute) { }

    ngOnInit() {
        this.name = this.router.snapshot.params['selected'];
     }

     ngOnDestroy() {
        this.name = '';
     }
}