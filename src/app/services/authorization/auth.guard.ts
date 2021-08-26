import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{

  constructor(private _authService: AuthenticationService, private _router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): boolean | UrlTree{
      let url: string = state.url;

      return this.checkLogin(url);
    
  }

  checkLogin(url: string): true | UrlTree {
    let val: string = localStorage.getItem('isUserLoggedIn');

    if(val != null && val == "true"){
       if(url == "/login")
          this._router.parseUrl('/home');
       else 
          return true;
    } else {
       return this._router.parseUrl('/login');
    }
  }
}
