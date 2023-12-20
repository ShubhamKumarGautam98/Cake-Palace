import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login.service';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class userguard implements CanActivate{
  constructor(private loginserv:LoginService,private router:Router){}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if(this.loginserv.isUserLoggedIn){
      return true
    }
    else{
      this.router.navigateByUrl("login");
      return false;
    }
  }
  
}