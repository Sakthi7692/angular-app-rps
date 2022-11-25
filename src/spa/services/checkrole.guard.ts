import { Injectable } from '@angular/core';
import { CanLoad, Route } from '@angular/router';
import { Session } from './globals';

@Injectable({providedIn: 'root'})
export class CheckRoleGuard implements CanLoad {
    constructor() { }

    canLoad(route: Route) {
        if (Session.userName === 'Sakthi') {
            alert ('Lazy loading');
            return true;
        } else {
            alert('Not Authenticated');
        }
        return false;
    }
}