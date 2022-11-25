import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Session } from './globals';

@Injectable({providedIn: 'root'})
export class AlwaysAuthGuard implements CanActivate {
    constructor(private http: HttpClient) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        console.log('I am always AuthGaurd ' + state);
        alert('I am Gaurd, I Intercept');
        if (Session.authenticated === true)
            return true;
        return false;
    }
}