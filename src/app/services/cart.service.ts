import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { cake } from '../models/cake'; // Import the cake model

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: cake[] = []; 
  private cartSubject = new BehaviorSubject<cake[]>([]);

  cart$ = this.cartSubject.asObservable();

  addToCart(item: cake) {
    this.cartItems.push(item);
    this.cartSubject.next([...this.cartItems]);
    console.log('Cart Items:', this.cartItems);
  }

  removeFromCart(index: number) {
    this.cartItems.splice(index, 1);
    this.cartSubject.next([...this.cartItems]);
  }

  getCartItems(): cake[] {
    return this.cartItems;
  }

  getCakeFromCart(cakeId: number): cake | undefined {
    return this.cartItems.find(item => item.id === cakeId);
  }

  getTotalPrice(): number {
    return this.cartItems.reduce((total, item) => total + (item.price !== undefined ? item.price : 0), 0);
  }
}
