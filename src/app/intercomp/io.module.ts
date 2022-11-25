import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { OrderComponent } from './order.component';
import { NotifyComponent, OutputComponent, PriceQuoterComponent } from './outputbinding';
import { SMSComponent } from './sms.component';
import { StockComponent } from './stock.component';
import { TimerComponent } from './timer.component';

@NgModule({
    imports: [CommonModule, FormsModule],
    exports: [StockComponent, OutputComponent],
    declarations: [OrderComponent, TimerComponent, SMSComponent, StockComponent,
    OutputComponent, PriceQuoterComponent, NotifyComponent
    ],
    providers: [],
})
export class IOModule { }
