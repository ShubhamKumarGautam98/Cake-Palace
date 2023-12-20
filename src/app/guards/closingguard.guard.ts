import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, CanDeactivateFn, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AddcakesComponent } from '../addcakes/addcakes.component';
import { Observable } from 'rxjs';
import { RegistrationComponent } from '../registration/registration.component';

@Injectable({providedIn:'root'})
export class closingguard implements CanDeactivate<AddcakesComponent>{
  canDeactivate(component: AddcakesComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return component.canClose?component.canClose():true;
  }
  
}
@Injectable({providedIn:'root'})
export class closingguard1 implements CanDeactivate<RegistrationComponent>{
  canDeactivate(component:RegistrationComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return component.canClose?component.canClose():true;
  }
  
}