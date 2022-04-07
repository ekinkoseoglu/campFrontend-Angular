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
    if (localStorage.getItem('token')) {
      return true;
    } else {
      return false;
    }
  }
}
