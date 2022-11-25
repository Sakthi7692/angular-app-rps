import { Component, OnInit } from '@angular/core';
import { MessagingService } from './messaging.service';

@Component({
    selector: 'app-message',
    templateUrl: './message.component.html'
})

export class MessageComponent implements OnInit {
    constructor(private ms: MessagingService) { }

    ngOnInit() { }

    postMessage() {
        this.ms.sendMessage(' - BOA Updates')
    }

    clearMessage() {
        this.ms.clearMessage();
    }


}