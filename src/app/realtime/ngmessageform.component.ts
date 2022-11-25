import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Message } from './ngmessage.component';

@Component({
    selector: 'message-form',
    templateUrl: './ngmessageform.component.html'
})

export class NgMessageFormComponent implements OnInit {
    @Output()
    msgCreated = new EventEmitter<Message>();

    constructor() { }

    ngOnInit() { }

    createMessage(category: string, punchline: string) {
      this.msgCreated.emit(new Message(category, punchline));
    }
}