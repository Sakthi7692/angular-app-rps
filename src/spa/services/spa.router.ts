import { RouterModule, Routes } from "@angular/router";
import { ContactListComponent } from "../components/contactlist.component";
import { LoginComponent } from "../components/login.component";
import { ShowComponent } from "../components/show.component";
import { AlwaysAuthGuard } from "./alwaysauth.gaurd";
import { CheckRoleGuard } from "./checkrole.guard";




export const customRoutes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'contacts', canActivate: [AlwaysAuthGuard], component: ContactListComponent},
    { path: 'show/:selected', component: ShowComponent},
    { path: 'about',
        canLoad: [CheckRoleGuard],
        loadChildren: ()=>import('../about/about.module').then(m=>m.AboutModule) },
    { path: '**', component: LoginComponent}
]

export const SPARoutingModule = RouterModule.forRoot(customRoutes);