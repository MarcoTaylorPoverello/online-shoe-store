import { Component } from '@angular/core';
import { Page } from "../../interfaces/page";
@Component({
  selector: 'app-admin-portal',
  templateUrl: './admin-portal.component.html',
  styleUrls: ['./admin-portal.component.css']
})
export class AdminPortalComponent {
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
