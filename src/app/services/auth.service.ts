import { Observable } from 'rxjs';
import { LoginModel } from './../models/loginModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  globalApi: string = 'https://localhost:44391/api/auth/';
  constructor(private http: HttpClient) {}

  login(loginModel: LoginModel): Observable<LoginModel> {
    let localApi = this.globalApi + 'login';
    return this.http.post<LoginModel>(localApi, loginModel);
  }
}
