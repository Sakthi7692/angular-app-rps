import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {User} from './user'

import {Session} from './globals';

//mock
var users = [
  new User('Sakthi','welcome'),
  new User('kavitha@gmail.com','hi')
];

@Injectable({providedIn:'root'})
export class LoginService {
private authenticatedUser:User | undefined;

  constructor(  private _router: Router){} 

  login(user:User){
    //http.get(url,user)
    this.authenticatedUser = 
      users.find((u) => u.userName === user.userName);

    if (this.authenticatedUser && 
      this.authenticatedUser.password === user.password){
        
      window.localStorage.setItem("user",user.userName);
      //$rootScope
      Session.authenticated=true;
      Session.userName=user.userName;
      Session.jwttoken="lkfjdskjfsljfdsf kfklsdjfklsdffsfsdfdffsfjsfj32jjk"
      Session.sessionID="123443434354646"  
      //resonse.headers.jwttoken
     this._router.navigate(['contacts']);  
      return true;
    }
    return false;

  }

logout() {
    localStorage.removeItem("user");
    Session.authenticated=false;
    Session.jwttoken=null
    this._router.navigate(['/']);
    
  }
  

  checkCredentials(){
    return true;
  }

}






