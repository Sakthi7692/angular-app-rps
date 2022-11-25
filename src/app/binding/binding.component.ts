import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-binding',
    templateUrl: './binding.component.html'
})

export class BindingComponent implements OnInit {
    userName: string = 'Sakthi';
    temp: number = 40;
    company: string = '';
    clicked: boolean = false;
    buttonStatus: boolean = false;
    clickedItem: any = {name: '', balance: 0};
    items: any = [
       {
           id: 1, name: 'Savings', balance: 1000,
       }, 
       {
           id: 2, name: 'Current', balance: 1000
       }, 
       {   
           id: 3, name: 'HomeLoan', balance: 1000
       }
    ]
    constructor() {
        this.company = 'BACI';
    }
    onItemClicked(item: any): void {
        this.clicked = true;
        this.clickedItem = item;
    }
    save(e: any): void {
        this.buttonStatus = true;
        alert('Ok, Thanks for Opening Account');
    }
    ngOnInit() { }
}