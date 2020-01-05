import { Injectable } from '@angular/core';
import { ProductModel } from '../../../shared/models/product.model';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getAllProducts() {
    return this.http.get<ProductModel[]>(environment.products_api);
  }

  getProductById(id: string) {
    return this.http.get<ProductModel>(`${environment.products_api}${id}`);
  }

  creteProduct(product: ProductModel) {
    return this.http.post<ProductModel>(`${environment.products_api}`, product);
  }

  updateProduct(id: string, changes: Partial<ProductModel>) {
    return this.http.put<ProductModel>(`${environment.products_api}${id}`, changes);
  }

  deleteProduct(id: string) {
    return this.http.delete(`${environment.products_api}${id}`);
  }
}
