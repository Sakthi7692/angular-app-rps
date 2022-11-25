import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'timer',
    template: `
       <h2 class="bg-dark text-warning text-center">{{time}}</h2>
    `
})

export class TimerComponent implements OnInit {
    time: any;
    constructor() {
        window.setInterval(()=>{
            this.time = new Date().toString();
        }, 1000)
     }

    ngOnInit() { }
}