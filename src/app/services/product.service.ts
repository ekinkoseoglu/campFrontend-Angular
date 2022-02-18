import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductResponseModel } from '../models/ProductResponseModel';
import { catchError, Observable, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  apiUrl: string = 'https://localhost:44360/api/products/getall';
  constructor(private httpClient: HttpClient) {}

  private handleError(err: HttpErrorResponse) {
    if (err.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An Error has occurred: ' + err.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        'Backend returned code ${err.status}, body was: ' + err.error
      );
    }
    // Return an observable with a user-facing error message.
    return throwError(
      () => new Error('Something bad happened, please try again later')
    );
  }

  getProducts(): Observable<ProductResponseModel> {
    return this.httpClient.get<ProductResponseModel>(this.apiUrl);
    // .pipe(
    // retry(3), /* Retry a failed request up to 3 times */
    // catchError(this.handleError)
    // );
  }
}
