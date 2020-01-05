import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../../../shared/models/product.model';
import { ProductsService } from 'src/app/modules/core/services/products/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: ProductModel[];

  constructor(private productService: ProductsService) { }

  ngOnInit() {
    this.productService.getAllProducts().subscribe(products => {
      this.products = products;
    });
  }

}
