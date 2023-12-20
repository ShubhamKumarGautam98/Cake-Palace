import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { cake } from '../models/cake';


@Injectable({
  providedIn: 'root'
})
export class CakeService {

  constructor(private httpclient:HttpClient) {
  }
  editCake(mycake:cake)
  {
   return this.httpclient.put<cake>("http://localhost:3000/cakes/"+mycake.id,mycake);
  }
  addcake(mycake:cake)
  {
   return this.httpclient.post<cake>("http://localhost:3000/cakes",mycake);
  }

  getCakes()
  {
    return this.httpclient.get<cake[]>("http://localhost:3000/cakes");
  }
  
  getCakesByName(title:string)
  {
    return this.httpclient.get<cake[]>("http://localhost:3000/cakes?title="+title);
  }
  getCakeById(id:any)
  {
    return this.httpclient.get<cake>("http://localhost:3000/cakes/"+id);
  }
 
  deletecake(id:number)
  {
    return this.httpclient.delete<cake>("http://localhost:3000/cakes/"+id);
  }
  calculateTotalPrice(cartItems: any[]): number {
    return cartItems.reduce((total, item) => total + item.price, 0);
  }

}
