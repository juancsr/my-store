import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/modules/shared/models/product.model';
import { CartService } from 'src/app/modules/core/services/cart/cart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  products$: Observable<ProductModel[]>;

  constructor(
    private cartService: CartService
  ) {
    this.products$ = this.cartService.cart$;
  }

  ngOnInit() {
  }

}
