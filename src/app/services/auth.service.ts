import { SingleResponseModel } from './../models/singleResponseModel';
import { Observable } from 'rxjs';
import { LoginModel } from './../models/loginModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenModel } from '../models/tokenModel';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  globalApi: string = 'https://localhost:44360/api/auth/';
  constructor(private http: HttpClient) {}

  login(loginModel: LoginModel): Observable<SingleResponseModel<TokenModel>> {
    let localApi = this.globalApi + 'login';
    return this.http.post<SingleResponseModel<TokenModel>>(
      localApi,
      loginModel
    );
  }

  isAuthenticated() {
    // Guardda kullanılmak için
    if (localStorage.getItem('token')) {
      // Eğer "Application" sectionu içinde token'i varsa
      return true; // True döndür
    } else {
      return false; // False döndür
    }
  }
}
