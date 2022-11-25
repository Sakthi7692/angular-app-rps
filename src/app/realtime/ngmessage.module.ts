import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgMessageComponent } from './ngmessage.component';
import { NgMessageFormComponent } from './ngmessageform.component';
import { NgMessageListComponent } from './ngmessagelist.component';


@NgModule({
    imports: [CommonModule],
    exports: [NgMessageListComponent],
    declarations: [
        NgMessageListComponent, NgMessageComponent, NgMessageFormComponent
    ],
    providers: [],
})
export class NgMessageModule { }
