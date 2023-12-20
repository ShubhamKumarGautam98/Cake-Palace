import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { CakeService } from '../services/cake.service';
import { cake } from '../models/cake';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent implements OnInit {
  cartItems: cake[] = [];
  totalPrice: number = 0;

  constructor(private cartService: CartService, private cakeserv: CakeService, private router:Router) {}

  ngOnInit(): void {
    this.cartService.cart$.subscribe(cartItems => {
      console.log('Cart Items:', this.cartItems);  
      this.cartItems = cartItems;
      this.updateTotalPrice();
    });
  } 
  updateTotalPrice() {
    this.totalPrice = this.calculateTotalPrice(this.cartItems);
  }

  removeFromCart(index: number) {
    this.cartService.removeFromCart(index);
    this.updateTotalPrice();
  }

  calculateTotalPrice(cartItems: cake[]): number {
    return cartItems.reduce((total, item) => {

      return total + (item.price !== undefined ? item.price : 0);
    }, 0);
  }
  buynow(){
    this.router.navigate(['buynow']);
  }
}
