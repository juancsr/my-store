import { Component, OnInit } from '@angular/core';
import { ProductModel } from '@shared/models/product.model';
import { ProductsService } from '@core/services/products/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.container.html',
  styleUrls: ['./products.container.scss']
})
// tslint:disable-next-line: component-class-suffix
export class ProductsContainer implements OnInit {
  products: ProductModel[];

  constructor(private productService: ProductsService) { }

  ngOnInit() {
    this.fetchProducts();
  }

  private fetchProducts() {
    this.productService.getAllProducts().subscribe(products => {
      this.products = products;
    });
  }

}
