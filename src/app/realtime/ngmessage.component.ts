
import {Component,Input} from '@angular/core';


export class Message {
  public category: string;
  public punchline: string;
  public hide: boolean;

  constructor(category: string, punchline: string) {
    this.category = category;
    this.punchline = punchline;
    this.hide = true;
  }

  toggle() {
    this.hide = !this.hide;
  }
}

@Component({
  selector: 'message',
  template: `
<div class="card card-block">
  <h4 class="card-title">
    <ng-content select=".category"></ng-content>
  </h4>
  <p class="card-text"
     [hidden]="data.hide">
    <ng-content select=".punchline"></ng-content>
  </p>
  <a class="btn btn-primary"
     (click)="data.toggle()">Tell your Message
  </a>
</div>
`
})
export class NgMessageComponent {
  @Input('message')
  data:any={}
}







