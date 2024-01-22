import { Component } from '@angular/core';
import {Page} from "../../interfaces/page";

@Component({
  selector: 'app-taxonomies',
  templateUrl: './taxonomies.component.html',
  styleUrls: ['./taxonomies.component.css']
})
export class TaxonomiesComponent {
  page: Page = {
    id: 123,
    title: 'About Us',
    featured_image: '',
    excerpt: '',
    content: '',
    slug: '',
    meta_description: '',
  }
}
