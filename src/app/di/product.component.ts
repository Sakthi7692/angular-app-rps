import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { ProductService } from './product.service';

@Component({
    selector: 'app-di',
    templateUrl: './product.component.html'
})

export class ProductComponent implements OnInit {
    product!: Product;
    constructor(private ps: ProductService) {
        console.log('Product Service Injected');
     }

    ngOnInit() {
        this.product = this.ps.getProduct();
     }
}