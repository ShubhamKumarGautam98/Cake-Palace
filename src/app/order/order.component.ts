import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Order } from '../models/order';
import { OrderService } from '../services/order.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { cake } from '../models/cake';
import { CakeService } from '../services/cake.service';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from '../services/login.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'] 
})

export class OrderComponent implements OnInit {
  orderDate: any;
  orderForm: FormGroup;
  myorder: Order = {
    id: 0,
    emailId: '',
    title: '',
    price: 0,
    quantity: 1,
    username: '',
    total: 0,
    orderDate:'',
    message:'',
    firstname:'',
    lastname:'',
    address:'',
    city:'',
    state:'',
   zipCode:''

  };
  mycake: cake = {
    id: 0,
    title: '',
    price: 0,
  
  };

  myuser: any = {
    username: '',
    email: ''
  };
  cartItems: cake[] = [];
  constructor(
    private cakeService: CakeService,
    private activateRoute: ActivatedRoute,
    private snackBar: MatSnackBar,
    private orderService: OrderService,
    private loginService: LoginService,
    private userService: UserService,
    private formBuilder: FormBuilder,

  ){

    this.orderForm = this.formBuilder.group({
      quantity: [1, Validators.min(1)],
      firstname: ['', Validators.required],
      
    });
  }

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe(params => {
      let cakeId = params.get("id") ?? 0;
      this.getOneCake(cakeId);
    });
  }

  getOneCake(id: any): void {
    this.cakeService.getCakeById(id).subscribe((data) => {
      this.mycake = data;
    });
  }

  async placeOrder() {
    await this.userService.checkIfUserExists(this.loginService.email).subscribe((data) => {
      this.myuser = data;
    })

    if (this.myorder.id) {
      await this.cakeService.getCakeById(this.myorder.id).subscribe((data) => {
        this.mycake = data
      })
    }
    let order: Order = {
      emailId: this.loginService.email,
      username: this.loginService.username,
      title: this.mycake.title,
      price: this.mycake.price,
      id: this.mycake.id,
      quantity: this.myorder.quantity,
      total: this.mycake.total,
      firstname:this.myorder.firstname,
      lastname:this.myorder.lastname,
      address:this.myorder.address,
      message:this.myorder.message,
      city:this.myorder.city,
      state:this.myorder.state,
      zipCode:this.myorder.zipCode,
      orderDate:this.myorder.orderDate
    };

    this.orderService.placeOrder(order).subscribe(
      () => {
        this.snackBar.open('Order placed successfully', 'Close', {
          duration: 3000,
          horizontalPosition: 'center',
          verticalPosition:"bottom"
        });
      },
      (error) => {
        this.snackBar.open('Error placing order', 'Close', {
          duration: 3000,
          horizontalPosition: 'center',
          verticalPosition: 'bottom'
        });
      }
    );
  }

}