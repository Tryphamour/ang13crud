import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Stock } from './model/stock';

@Injectable({
  providedIn: 'root',
})
export class StockService {
  uri = 'http://localhost:3000/stock';

  constructor(private http: HttpClient) {}

  addProduct(quantity: number, id_product: number) {

  }

  getStock() {

  }

  updateProduct(quantity: number, id_product: number) {

  }

  deleteProduct() {

  }
}
