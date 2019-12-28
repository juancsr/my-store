import {
  Component, OnInit, Input, Output,
  EventEmitter, OnChanges, SimpleChanges, DoCheck, OnDestroy
} from '@angular/core';
import { ProductModel } from 'src/app/product.model';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements /*DoCheck,*/ OnChanges, OnInit, OnDestroy {

  @Input() producto: ProductModel;
  @Output() productoClicked: EventEmitter<ProductModel> = new EventEmitter<ProductModel>();
  selectedProduct: ProductModel;

  constructor() {
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

}
