import { Component } from '@angular/core';
import {Page} from "../../interfaces/page";
import pagesData from "../../data/pages.json";

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.css']
})
export class PrivacyPolicyComponent {
  pages: Page[] = pagesData;

  constructor() {
    console.log(JSON.stringify(this.pages));
  }
}
