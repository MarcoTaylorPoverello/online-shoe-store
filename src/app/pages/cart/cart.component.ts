import { Component, OnInit } from '@angular/core';
import {Page} from "../../interfaces/page";
import pagesData from "../../data/pages.json";
import { faX } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  faX = faX;
  faMinus = faMinus

  constructor(){}

  ngOnInit(): void {
    this.CartDetails();
  }

  calculateVAT(product: {price: number}){
    const vatPercentage = 0.15;
    const vatAmount = product.price * vatPercentage;
  
    return vatAmount;
  }

  calculateTotalVAT(product: {price: number}) {
    const vatPercentage = 0.15;
    const vatAmount = product.price * vatPercentage;
    const priceWithVAT = product.price + vatAmount;
  
    return priceWithVAT;
  }

  getCartDetails:any=[];

  CartDetails(){
  if(localStorage.getItem('localAddToCart')){
   let localCart = JSON.parse(localStorage.getItem('localAddToCart'));
   this.getCartDetails = [];
   for (var i = 0; i < localCart.length; i++){
    let o = {
      name: localCart[i].name,
      image: localCart[i].image,
      quantity: localCart[i].quantity,
      price: localCart[i].price * localCart[i].quantity,
      vat: (localCart[i].price * 0.15) * localCart[i].quantity,
      priceIncVat:0
    }
    o.priceIncVat = (o.vat + o.price);
    this.getCartDetails.push(o);
   }
    }
  }

  removeFromCart(item: any) {
    // Find the index of the item in the cartItems array
    const index = this.getCartDetails.indexOf(item);
    
    if (index !== -1) { 
      // Remove the item from the array
      this.getCartDetails.splice(index, 1);
  
      // Update local storage
      localStorage.setItem('localAddToCart', JSON.stringify(this.getCartDetails));
    }
  }

  removeQuantityFromCart(item: any) {
    // Find the index of the item in the cartItems array
    console.log('Removing quantity from cart:', item);
    const index = this.getCartDetails.indexOf(item);
    
    if (index !== -1) {
      // Decrease the quantity of the item by one
      if (item.quantity > 1) {
        item.quantity--;
      } else {
        // If quantity is 1, remove the item from the array
        this.getCartDetails.splice(index, 1);
      }
  
      // Update local storage
      localStorage.setItem('localAddToCart', JSON.stringify(this.getCartDetails));
    }
  }

  totalAmount:number=0;

  getTotal() {
    let total = 0;
  
    if (Array.isArray(this.getCartDetails)) {
      for (var i = 0; i < this.getCartDetails.length; i++) {
        if (this.getCartDetails[i].price) {
          total += this.getCartDetails[i].priceIncVat;
        }
      }
    }
  
    this.totalAmount = total;
  
    return total;
  }
 
  pages: Page[] = pagesData;

}



