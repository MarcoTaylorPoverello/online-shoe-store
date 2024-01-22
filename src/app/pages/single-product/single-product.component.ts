import { Component } from '@angular/core';
import { Page } from "../../interfaces/page";
import pagesData from "../../data/pages.json";

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent {
  pages: Page[] = pagesData;
  constructor() {
    console.log(JSON.stringify(this.pages));
  }
}
