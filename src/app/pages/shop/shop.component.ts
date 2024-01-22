import { Component } from '@angular/core';
import { Page } from "../../interfaces/page";
import { Products } from "../../interfaces/products"
import pagesData from "../../data/pages.json";
import productsData from "../../data/products.json"

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {
  pages: Page[] = pagesData;
  products: Products[] = productsData;

  constructor() {
    console.log(JSON.stringify(this.pages));
    console.log(JSON.stringify(this.products));
  }
}
