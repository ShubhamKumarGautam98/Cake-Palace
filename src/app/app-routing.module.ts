import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CakeveiwComponent } from './cakeveiw/cakeveiw.component';
import { AddcakesComponent } from './addcakes/addcakes.component';
import { ViewonecakeComponent } from './viewonecake/viewonecake.component';
import { ErrorcomponentComponent } from './errorcomponent/errorcomponent.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { closingguard, closingguard1 } from './guards/closingguard.guard';
import { Adminguard } from './guards/adminguard.guard';
import{AddToCartComponent} from './add-to-cart/add-to-cart.component'
import { BuynowComponent } from './buynow/buynow.component';
import { OrderComponent } from './order/order.component';

const routes: Routes = [

  {
    path:"",
    component:CakeveiwComponent
  },
  { path: 'cart', component:AddToCartComponent  },
  {
    path:"addcake",
    component:AddcakesComponent,
    canActivate:[Adminguard],
    canDeactivate:[closingguard]
  },
  {
    path:"viewallcakes",
    redirectTo:""
  },
  {
    path:"viewDetails/:id",
    component:ViewonecakeComponent
  },
  {
    path:"editDetails/:id",
    component:AddcakesComponent,
    canActivate:[Adminguard],
    canDeactivate:[closingguard]
  },
  {
    path:"deletecake/:id",
    component:CakeveiwComponent,
    canActivate:[Adminguard],
  },
  {
    path:"registration",
    component:RegistrationComponent,
    canDeactivate:[closingguard1]
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"addToCart",
    component:AddToCartComponent
  },
  {
    path:"buynow/:id",
    component:OrderComponent
  },
  {
    path:"",
    component:ErrorcomponentComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
