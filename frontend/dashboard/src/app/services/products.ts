import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Product {
  _id?: string;
  name: string;
  price: number;
  description: string;
  image: string;
  isActive: boolean;
  createdAt?: string;
  updatedAt?: string;
}

@Injectable({
  providedIn: 'root',
})
export class ProductsService {

  private baseUrl = 'https://localkissan-api.securadev.com/farm';

  constructor(private http: HttpClient) {}

  /* ==========================
        GET ALL PRODUCTS
  ========================== */
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}/products`);
  }

  /* ==========================
        GET SINGLE PRODUCT
  ========================== */
  getProductById(id: string): Observable<Product> {
    return this.http.get<Product>(`${this.baseUrl}/product/${id}`);
  }

  /* ==========================
        CREATE PRODUCT
  ========================== */
  createProduct(data: Product): Observable<Product> {
    return this.http.post<Product>(`${this.baseUrl}/product`, data);
  }

  /* ==========================
        UPDATE PRODUCT
  ========================== */
  updateProduct(id: string, data: Product): Observable<Product> {
    return this.http.put<Product>(`${this.baseUrl}/product/${id}`, data);
  }

  /* ==========================
        DELETE PRODUCT
  ========================== */
  deleteProduct(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/product/${id}`);
  }

}
