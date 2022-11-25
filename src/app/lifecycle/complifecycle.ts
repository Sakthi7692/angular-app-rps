import { AfterViewChecked, ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges, ViewChildren } from '@angular/core';

@Component({
    selector: 'app-lifecycle',
    template: `
        <h2>Search
           <input  [(ngModel)]="search">
        </h2>
        <child [search]='search'></child>
    `
})

export class LifeCycleComponent implements OnInit {
    search: string = 'Sakthi';
    constructor() { }

    ngOnInit() { }
}

@Component({
    selector: 'child',
    template: `<div>Child</div>SearchText: {{search + search1}} 
     <h2 *ngFor="let item of items" #demo>BACI</h2>
     <h3>Count is {{count}}</h3>
     <button (click)='detect()'>Detect change</button>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class ChildComponent implements OnInit, OnChanges, DoCheck, AfterViewChecked {
    @Input() search: string= '';
    search1: string = 'Childe Alone';
    count: number = 0;
    items = [1,2,3,4];
    @ViewChildren('demo')
    demo: any;
    constructor(private cd: ChangeDetectorRef) {
        // only for the binding components
      //  this.cd.detach();
        console.log('Child from Parent Search: ' + this.search);
     }
     detect() {
        this.items.push(this.items.length + 1);
     }

    ngOnInit() {
        console.log("NgOninit" + this.search);
        setInterval(()=>{
            ++this.count;
            console.log("Count is", this.count)
        }, 1000)
       /* setTimeout(()=>{
            this.cd.reattach();
        }, 5000)*/
     }
    ngOnChanges(changes: SimpleChanges): void {
        console.log('Child from Parent Search - ngOnchanges: ' + this.search);
        for (let c in changes) {
        console.log(`Iterator - ngOnchanges:
         Key ${c} changed 
         - Prev value: ${changes[c].previousValue} 
         - Curr value: ${changes[c].currentValue}`);

        }
    }
    
    ngDoCheck(): void {
        // prevent any component rendering
        console.log("ngDoCheck" + this.search);
       /* if (this.search.length === 10) {
            this.cd.detectChanges();
        }*/
    }  
    ngAfterViewChecked(): void {
        // UI DOM Manipulation
        console.log("ngAfterViewChecked" + this.search);
        this.demo._results[0].nativeElement.style.backgroundColor='blue'
        console.log("ngAfterViewChecked dm changes" + this.demo);
    } 
    ngOnDestroy(): void {
        // unsubscribe or destroy the used implementation subscription
        console.log("ngOnDestroy" + this.search);
    }
}