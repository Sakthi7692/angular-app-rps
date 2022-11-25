import { Component } from "@angular/core";

import { Message } from "./ngmessage.component";

@Component({
  selector: 'message-list',
  template: `
<message-form (msgCreated)="addMessage($event)"></message-form>
<message *ngFor="let j of messages" [message]="j">
  <span class="category">{{ j.category }}?</span>
  <h3 class="punchline">{{ j.punchline }}</h3>
</message>
  `
})
export class NgMessageListComponent {
  messages: Message[];

  constructor() {
    this.messages = [
      new Message("IT", "Angular 16 is coming..."),
      new Message("General", "Omicron is gone"),
      new Message("Stocks", "Stock market is going down’"),
    ];
  }

  addMessage(event:Message) {
    this.messages.push(event);
  }
}
