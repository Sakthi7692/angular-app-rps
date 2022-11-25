import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./about.component";

export const aboutRoutes:  Routes = [
    {path: '', component: AboutComponent}

]

export const AboutRouteModule = RouterModule.forChild(aboutRoutes);