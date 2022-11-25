import { Component } from '@angular/core';
import { CalclibService } from './calclib.service';

@Component({
  selector: 'lib-calclib',
  template: `
    <p>
      calclib works! The amount is {{amout}}
    </p>
  `,
  styles: [
  ]
})
export class CalclibComponent {
  amout: number=0;
  constructor(private cs: CalclibService) {

  }

  ngOnInit() {
    this.amout = this.cs.calculate(50000, 5, 12);
  }
}
