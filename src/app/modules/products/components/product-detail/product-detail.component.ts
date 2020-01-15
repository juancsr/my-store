import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ProductModel } from '@shared/models/product.model';
import { ProductsService } from '@core/services/products/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product$: Observable<ProductModel>;

  constructor(
    private router: ActivatedRoute,
    private productService: ProductsService
  ) { }

  ngOnInit() {
    this.product$ = this.router.params
    .pipe(
      switchMap((params: Params) => this.productService.getProductById(params.id))
    );
  }

  createProduct() {
    const newProduct: ProductModel = {
      id: '7',
      title: 'New product',
      price: 30000,
      image: '',
      description: 'description of new product'
    };
    this.productService.creteProduct(newProduct).subscribe(product => {
      console.info(product);
    });
  }

  updateProduct() {
    const updatedProduct: Partial<ProductModel> = {
      description: 'description of updated product'
    };

    this.productService.updateProduct('2', updatedProduct).subscribe(product => {
      console.info(product);
    });
  }

  deleteProduct() {
    this.productService.deleteProduct('7').subscribe(response => {
      console.info(response);
    });
  }

}
