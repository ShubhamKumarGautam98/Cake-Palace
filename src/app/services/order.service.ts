import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  
  constructor(private http: HttpClient) { }

  placeOrder(orderData: any): Observable<any> {
    return this.http.post<any>("http://localhost:3000/orders", orderData);
  }

  getOrdersByUser(emailId: string): Observable<any[]> {
     return this.http.get<any[]>("http://localhost:3000/orders?email=" + emailId);
  }
  
  getAllCakeReqeusts() : Observable<Array<Order>> {
    return this.http.get<Array<Order>>("http://localhost:3000/orders");
  }

}