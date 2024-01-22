import {Component} from '@angular/core';
import {Page} from "../../interfaces/page";
import pagesData from "../../data/pages.json";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent {
  pages: Page[] = pagesData;

  constructor() {
    console.log(JSON.stringify(this.pages));
  }

}
