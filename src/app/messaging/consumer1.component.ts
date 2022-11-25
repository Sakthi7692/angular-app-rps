import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MessagingService } from './messaging.service';

@Component({
    selector: 'app-consumer1',
    template: `
        <div class="card" >
        <div class="card-body">
            <h5 class="card-title">Consumer 1</h5>
            <p class="card-text">{{message}}</p>
        </div>
        </div>
    `
})

export class Consumer1Component implements OnInit {
    message: any = '';
    subscriber: Subscription | undefined = new Subscription();
    constructor(private ms: MessagingService) { }

    ngOnInit() {
        this.subscriber = this.ms.getMessage().subscribe((msg)=>{
            this.message = msg.result;
        });
     }

     ngOnDestroy() {
        this.subscriber?.unsubscribe();
     }
}