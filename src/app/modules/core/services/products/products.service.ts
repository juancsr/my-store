import { Injectable } from '@angular/core';
import { ProductModel } from '../../../shared/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  productos: ProductModel[] = [
    {
      Id: 1,
      Nombre: 'Producto 1',
      Precio: 45.0,
      FechaCompra: new Date('10-01-2020'),
      Descripcion: 'este es un muy buen precio'
    },
    {
      Id: 2,
      Nombre: 'Producto 2',
      Precio: 5000,
      FechaCompra: new Date('12-12-2019'),
      Descripcion: 'este es un muy buen producto'
    }
  ];

  constructor() { }

  getAllProducts() {
    return this.productos;
  }

  getProductById(id: number) {
    return this.productos.find(item => id === item.Id);
  }
}
