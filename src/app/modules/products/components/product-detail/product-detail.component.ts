import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ProductModel } from '../../../shared/models/product.model';
import { ProductsService } from 'src/app/modules/core/services/products/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: ProductModel;

  constructor(
    private router: ActivatedRoute,
    private productService: ProductsService
  ) { }

  ngOnInit() {
    this.router.params.subscribe((params: Params) => {
      const id = params.id;
      // tslint:disable-next-line: radix
      this.product = this.productService.getProductById(parseInt(id));
      console.log(this.product);
    });
  }

}
