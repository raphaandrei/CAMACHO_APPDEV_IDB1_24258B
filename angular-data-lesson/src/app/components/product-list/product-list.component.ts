import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Product {
  id: number;
  name: string;
  price: number;
}

@Component({
  selector: 'app-product-list',
  templateUrl: 'components/product-list.component.html',
})
export class ProductListComponent {
  products: Product[] = [
    { id: 1, name: 'Laptop', price: 1000 },
    { id: 2, name: 'Phone', price: 500 },
  ];

  constructor(private router: Router) {}

  viewProduct(id: number) {
    this.router.navigate(['/products', id]);
  }
}