import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/category';
import { ListResponseModel } from '../models/ListResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  apiUrl: string = 'https://localhost:44360/api/categories/getall';
  constructor(private httpClient: HttpClient) {}

  getCategories(): Observable<ListResponseModel<Category>> {
    return this.httpClient.get<ListResponseModel<Category>>(this.apiUrl);
  }
  // .pipe(
  // retry(3), /* Retry a failed request up to 3 times */
  // catchError(this.handleError)
  // );

  //          ERROR HANDLING WITH HttpClient->HttpErrorResponse

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
