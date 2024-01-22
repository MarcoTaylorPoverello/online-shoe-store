import { Component } from '@angular/core';
import { Page } from "../../interfaces/page";
import pagesData from "../../data/pages.json";
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  pages: Page[] = pagesData;
  constructor() {
    console.log(JSON.stringify(this.pages));
  }
}
