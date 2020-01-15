import { Component, OnInit } from '@angular/core';
import { ProductsService } from '@core/services/products/products.service';
import { ProductModel } from '@shared/models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: ProductModel[];
  displayedColumns: string[] = ['id', 'title', 'price', 'actions'];

  constructor(private productService: ProductsService) { }

  ngOnInit() {
    this.fetchProducts();
  }

  fetchProducts() {
    this.productService.getAllProducts().subscribe(products => {
      this.products = products;
    });
  }

  deleteProduct(id: string) {
    this.productService.deleteProduct(id).subscribe(response => {
      if (response) {
        const index = this.products.findIndex(product => product.id === id);
        this.products.splice(index, 1);
        this.products = [...this.products];
      }
    });
  }
}
