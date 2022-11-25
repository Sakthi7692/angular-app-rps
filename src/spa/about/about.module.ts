import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AboutComponent } from './about.component';
import { AboutRouteModule } from './about.route';


@NgModule({
    imports: [CommonModule, AboutRouteModule],
    exports: [],
    declarations: [AboutComponent],
    providers: [],
})
export class AboutModule { }
