import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginGuard implements CanActivate {
  constructor(
    private authService: AuthService, // Kişi Authanticate mi?
    private toastr: ToastrService, // Bilgi vermek için
    private router: Router // Authanticate olmayan kişiyi Login Componentine yönlendirmek için.
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.authService.isAuthenticated()) {
      // Eğer kişi Authanticate ise (Application içinde token varsa)
      return true; // True döndür
    } else {
      //yoksa
      this.router.navigate(['login']); // Navigate this User to login route'una gönderiyor (Dolaylı olarak Login componentine yani)
      this.toastr.error('Giriş Yapmalısınız', 'Yetki Hatası'); // And Show it a error Message
      return false;
    }
  }
}
