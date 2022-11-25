import {Injectable} from '@angular/core';
import {CONTACTS} from './mock-contacts';
import {Contacts} from './contact';

@Injectable()
export class ContactService{
	getContacts(){
		// return http.get(url)
		return Promise.resolve (CONTACTS);
	}

	insertContact(contact:Contacts){
		//return  http.post(url,contact)
		Promise.resolve(CONTACTS)
		 .then( (contacts:Contacts[] ) =>
		            contacts.push(contact))
	}
		//return http.delete(url,contact.name)
}



