import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { TAndCsComponent } from './pages/t-and-cs/t-and-cs.component';
import { ReturnsPolicyComponent } from './pages/returns-policy/returns-policy.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { ShopComponent } from './pages/shop/shop.component';
import { TaxonomiesComponent } from './pages/taxonomies/taxonomies.component';
import { SingleProductComponent } from './pages/single-product/single-product.component';
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { AccountComponent } from './pages/account/account.component';
import { AdminPortalComponent } from './pages/admin-portal/admin-portal.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SliderComponent } from './components/slider/slider.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    TAndCsComponent,
    ReturnsPolicyComponent,
    PrivacyPolicyComponent,
    ShopComponent,
    TaxonomiesComponent,
    SingleProductComponent,
    CartComponent,
    CheckoutComponent,
    OrdersComponent,
    AccountComponent,
    AdminPortalComponent,
    HeaderComponent,
    FooterComponent,
    SliderComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  exports:[
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

