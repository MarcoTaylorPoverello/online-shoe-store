import { Component } from '@angular/core';
import {Page} from "../../interfaces/page";
import pagesData from "../../data/pages.json";

@Component({
  selector: 'app-t-and-cs',
  templateUrl: './t-and-cs.component.html',
  styleUrls: ['./t-and-cs.component.css']
})
export class TAndCsComponent {
  pages: Page[] = pagesData;
  constructor() {
    console.log(JSON.stringify(this.pages));
  }
}
