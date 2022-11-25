import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MessagingService } from './messaging/messaging.service';

@Component({
    selector: 'app-consumer2',
    template: `
        <h4>Consumer 2 <span class="badge bg-secondary">{{message}}</span></h4>
    `
})

export class Consumer2Component implements OnInit {
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