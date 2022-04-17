import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginFormGroup: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.addLoginFormGroup();
  }

  addLoginFormGroup() {
    this.loginFormGroup = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  login() {
    if (this.loginFormGroup.valid) {
      console.log(this.loginFormGroup.value);
      let loginModel = Object.assign({}, this.loginFormGroup.value);
      this.authService.login(loginModel).subscribe(
        (response) => {
          localStorage.setItem('token', response.data.token); // Gelen Response içindeki Data'nın içindeki token key'ini "token" isminde bir ad ile localStorage de saklıyoruz.
          console.log(response.data);
        },
        (responseError) => {
          console.log(responseError.error);
          this.toastrService.error(responseError.error);
        }
      );
    }
  }
}
