import { Component } from '@angular/core';
import { Order } from '../models/order';
import { OrderService } from '../services/order.service';
@Component({
  selector: 'app-view-order',
  templateUrl: './view-order.component.html',
  styleUrl: './view-order.component.css'
})
export class ViewOrderComponent {

  myorder:Order[]=[]

  constructor(private orderservice:OrderService){}
  ngOnInit(): void {
   this.orderservice.getOrder().subscribe((data)=>{
    this.myorder=data
   })
}
}

