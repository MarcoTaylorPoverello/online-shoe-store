import { Component } from '@angular/core';
import {Page} from "../../interfaces/page";
import pagesData from "../../data/pages.json";

@Component({
  selector: 'app-returns-policy',
  templateUrl: './returns-policy.component.html',
  styleUrls: ['./returns-policy.component.css']
})
export class ReturnsPolicyComponent {
  pages: Page[] = pagesData;
  constructor() {
    console.log(JSON.stringify(this.pages));
  }
}
