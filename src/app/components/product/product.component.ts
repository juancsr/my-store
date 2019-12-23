import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../../product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  productos: ProductModel[] = [
    {
      Nombre: 'Producto 1',
      Precio: 45.0,
      FechaCompra: new Date('10-01-2020')
    },
    {
      Nombre: 'Producto 2',
      Precio: 5000,
      FechaCompra: new Date('12-12-2019')
    }
  ];
  constructor() { }

  ngOnInit() {
  }
}
