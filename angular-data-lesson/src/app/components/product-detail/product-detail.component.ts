import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: 'components/product-detail.component.html',
})
export class ProductDetailComponent {
  productId: number | null = null;

  constructor(private route: ActivatedRoute) {
    this.productId = Number(this.route.snapshot.paramMap.get('id'));
  }
}