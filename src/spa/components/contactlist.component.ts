import {Component,OnInit} from '@angular/core';

//load services
import {Contacts} from '../services/contact';
import {ContactService} from '../services/contact.service';

import {Session} from '../services/globals';

@Component({
    providers:[ContactService],
    templateUrl: './templates/contactlist.component.html' 
})
export class ContactListComponent implements OnInit{
  authenticated:boolean |undefined;
  name:string | undefined;  
  public contacts:Contacts[] | undefined;
  public selected:any={};
  public showDetails:boolean=false;
  
  constructor(
      private _contactService:ContactService  ){ }
  
 ngOnInit(){
     this.name=Session.userName;   
     this.authenticated=Session.authenticated;
     
     this._contactService.getContacts()
        .then( (cnts:any) => this.contacts=cnts)
   }
 
  selectedContact(contact:Contacts){
  	this.selected=contact.name;    
  	this.showDetails=true;    
  }
}