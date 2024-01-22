import { Component } from '@angular/core';
import {Page} from "../../interfaces/page";
import pagesData from "../../data/pages.json";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  pages: Page[] = pagesData;

  constructor() {
    console.log(JSON.stringify(this.pages));
  }
}
