import { Component } from '@angular/core';
import {Page} from "../../interfaces/page";
import pagesData from "../../data/pages.json";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {
  pages: Page[] = pagesData;

  constructor() {
    console.log(JSON.stringify(this.pages));
  }
}
