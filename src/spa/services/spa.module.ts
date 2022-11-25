import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ContactListComponent } from '../components/contactlist.component';
import { LoginComponent } from '../components/login.component';
import { SPAComponent } from './spa.component';
import { SPARoutingModule } from './spa.router';

@NgModule({
    imports: [CommonModule, FormsModule, SPARoutingModule],
    exports: [SPAComponent],
    declarations: [SPAComponent, LoginComponent, ContactListComponent],
    providers: [],
})
export class SPAModule { }
