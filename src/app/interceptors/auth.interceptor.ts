import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  //Bu Interceptora giren Headersiz POST request, Authorization headerli POST olarak çıkıyor.

  // Headersiz gelen Post requestinin içine, localStoragedeki tokeni yakalayıp o token'i Requestin Header'ine yapıştırıp yolluyoruz.

  constructor() {}

  intercept(
    request: HttpRequest<any>, // Mevcut yaptığım request
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    let token = localStorage.getItem('token'); // localstoragedeki token'i al
    let newRequest: HttpRequest<any>; // Yeni bir Request instancesi yarat
    newRequest = request.clone({
      // Mevcut requestimin clone'nunu o instanceye atar
      headers: request.headers.set('Authorization', 'Bearer ' + token), // Üstüne üstlük mevcut request'in clone'si olan yeni instancemizin header'ine yukardan çektğimiz "Authorization" key'i ile "Bearer 'token'" valuesini da Header olarak
    });
    return next.handle(newRequest);
    // Böylece artık elimde hem eski requestteki veriler hem de Authorization Headerli yeni requestimizi yollarız.
  }
}
