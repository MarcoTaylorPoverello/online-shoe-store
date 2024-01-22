import { Component, OnInit } from '@angular/core';
import {Page} from "../../interfaces/page";
import pagesData from "../../data/pages.json";
import { faCcVisa, faCcAmex, faCcMastercard, faCcDiscover } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit{
  pages: Page[] = pagesData;
  faCcVisa = faCcVisa;
  faCcAmex = faCcAmex;
  faCcMastercard = faCcMastercard;
  faCcDiscover = faCcDiscover;

  ngOnInit(): void {
    this.CartDetails();
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
  
}
