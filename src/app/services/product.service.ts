import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { catchError, Observable, retry, throwError } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Product } from '../models/product';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  apiUrl: string = 'https://localhost:44360/api/';
  constructor(private httpClient: HttpClient) {}

  getProducts(): Observable<ListResponseModel<Product>> {
    let newPath = this.apiUrl + 'products/getall';
    return this.httpClient.get<ListResponseModel<Product>>(newPath);
    // .pipe(
    // retry(3), /* Retry a failed request up to 3 times */
    // catchError(this.handleError)
    // );
  }

  getProductsByCategory(
    categoryId: number
  ): Observable<ListResponseModel<Product>> {
    let newPath =
      this.apiUrl + 'products/getbycategory?categoryId=' + categoryId;
    return this.httpClient.get<ListResponseModel<Product>>(newPath);
    // .pipe(
    // retry(3), /* Retry a failed request up to 3 times */
    // catchError(this.handleError)
    // );
  }

  add(product: Product): Observable<SingleResponseModel<Product>> {
    let newPath = this.apiUrl + 'products/add';
    return this.httpClient.post<SingleResponseModel<Product>>(newPath, product);
  }
  //          Error Handling with HttpClient->HttpErrorResponse

  // private handleError(err: HttpErrorResponse) {
  //   if (err.status === 0) {
  //     // A client-side or network error occurred. Handle it accordingly.
  //     console.error('An Error has occurred: ' + err.error);
  //   } else {
  //     // The backend returned an unsuccessful response code.
  //     // The response body may contain clues as to what went wrong.
  //     console.error(
  //       'Backend returned code ${err.status}, body was: ' + err.error
  //     );
  //   }
  //   // Return an observable with a user-facing error message.
  //   return throwError(
  //     () => new Error('Something bad happened, please try again later')
  //   );
  // }
}
