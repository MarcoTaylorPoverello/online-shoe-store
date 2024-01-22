import {Component, OnInit} from '@angular/core';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { DemoDataService } from 'src/app/services/demo-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  faCartShopping = faCartShopping

  constructor(private auth: DemoDataService) {
    this.auth.cartSubject.subscribe((data)=>{
    this.cartItem = data;  
    });

  }
  
  ngOnInit(): void {
    this.cartItemFunction();
  }

  cartItem:number = 0;
  cartItemFunction(){
    if(localStorage.getItem('localAddToCart') != null){
      var cartCount = JSON.parse(localStorage.getItem('localAddToCart'));
      this.cartItem = cartCount.length;
    }
  }

}
