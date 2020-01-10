import {
  Component, OnInit, Input, Output,
  EventEmitter, OnChanges, SimpleChanges, DoCheck, OnDestroy
} from '@angular/core';

import { ProductModel } from '../../../shared/models/product.model';
import { CartService } from 'src/app/modules/core/services/cart/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements /*DoCheck,*/ OnChanges, OnInit, OnDestroy {

  @Input() producto: ProductModel;
  @Output() productoClicked: EventEmitter<ProductModel> = new EventEmitter<ProductModel>();
  selectedProduct: ProductModel;

  constructor(private cartService: CartService) {
    console.log('constructor');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges:', changes);
  }

  ngOnInit() {
    console.log('ngOnInit');
  }

  // ngDoCheck(): void {
  //     console.log('ngDoCheck');
  // }

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }

  addCart() {
    this.cartService.addCart(this.producto);
  }

}
