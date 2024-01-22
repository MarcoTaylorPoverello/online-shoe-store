import { Component, OnInit } from '@angular/core';
import { Page } from "../../interfaces/page";
import pagesData from "../../data/pages.json";
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { DemoDataService } from 'src/app/services/demo-data.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  pages: Page[] = pagesData;
  faArrowRight = faArrowRight;
  faArrowLeft = faArrowLeft;
  faPlus = faPlus;
  faMinus = faMinus;
  products;

  constructor(private auth: DemoDataService) {}
  
  ngOnInit() :void{
    this.products = [{image: 'assets/img/rnike.png', name:'Nike RunnersEX', brand:'Nike', description: 'Runners that will give you what you need when you need it most!', quantity: 1, price: 700},
  {image: 'assets/img/wnike.png', name:'Adidas Air WMk1', brand:'Nike', description: 'Sneakers that will give you what you need when you need it most!', quantity: 1, price: 2000},
  {image: 'assets/img/parallax4.png', name:'Nike Lowdunk', brand:'Nike', description: 'Sneakers that will give you what you need when you need it most!', quantity: 1, price: 1100},
  {image: 'assets/img/parallax5.png', name:'Nike Rainbow 7s', brand:'Nike', description: 'Sneakers that will give you what you need when you need it most!', quantity: 1, price: 1500},
  {image: 'assets/img/parallax1.png', name:'Nike Balance', brand:'Nike', description: 'Sneakers that will give you what you need when you need it most!', quantity: 1, price: 1400},
  {image: 'assets/img/parallax2.png', name:'Adidas Yeezy OG', brand:'Adidas', description: 'Sneakers that will give you what you need when you need it most!', quantity: 1, price: 3200},
  {image: 'assets/img/parallax3.png', name:'Converse AllBLK Star', brand:'Converse', description: 'Sneakers that will give you what you need when you need it most!', quantity: 1, price: 850}];
  } 

  // Adding and removing a product amount from the product section before adding to cart

  add(item) {
    if(item.quantity != 5){
      item.quantity += 1;
    }
  }

  minus(item) {
    if(item.quantity != 1){
      item.quantity -= 1;
    }
  }

// global variable of the addToCart function
  itemsCart:any = [];

  addToCart(product){
    let cartDataNull = localStorage.getItem('localAddToCart');
    if(cartDataNull == null){
      let storeDataGet:any = [];
      product.quantity = product.quantity;
      storeDataGet.push(product);
      localStorage.setItem('localAddToCart', JSON.stringify(storeDataGet));
    }
    else {
      // Can change 'category.name' to a unique ID value later on when I get Alex's backend data. the 'name' value is the product name from product array above
      var id = product.name;
      let index:number = -1;
      this.itemsCart = JSON.parse(localStorage.getItem('localAddToCart'));
      // For making sure the local storage doesn't store duplicate values (ID) - This is checking if the ID's match exactly - Again, the '.name' value will change to a unique ID from Alex's backend data
      for(let i = 0; i < this.itemsCart.length; i++){
        if(id === this.itemsCart[i].id){
      // For updating the quantity value that gets saved to the local storage
          this.itemsCart[i].qnt += product.quantity;
          index = i;
          break;
        }
      }
      // For making sure the local storage doesn't store duplicate values (ID) - This is checking if the ID's DO NOT match.
      if(index == -1){
        product.quantity = product.quantity;
        this.itemsCart.push(product);
        localStorage.setItem('localAddToCart', JSON.stringify(this.itemsCart));
      }
      else {
        localStorage.setItem('localAddToCart', JSON.stringify(this.itemsCart));
      }
    }
    this.cartNumberFunction()
  }

// global variable of the cartNumber function
  cartNumber:number = 0;

  cartNumberFunction(){
    var cartValue = JSON.parse(localStorage.getItem('localAddToCart'));
    this.cartNumber = cartValue.length;
    this.auth.cartSubject.next(this.cartNumber);
  }

}
