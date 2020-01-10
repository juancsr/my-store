import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductModel } from '../../../shared/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private products: ProductModel[] = [];
  private cart = new BehaviorSubject<ProductModel[]>([]);

  cart$ = this.cart.asObservable();

  constructor() { }

  addCart(product: ProductModel) {
    this.products = [...this.products, product];
    this.cart.next(this.products);
  }
}
