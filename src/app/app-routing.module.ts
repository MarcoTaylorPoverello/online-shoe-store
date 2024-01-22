import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {TAndCsComponent} from "./pages/t-and-cs/t-and-cs.component";
import {AdminPortalComponent} from "./pages/admin-portal/admin-portal.component";
import {TaxonomiesComponent} from "./pages/taxonomies/taxonomies.component";
import {CartComponent} from "./pages/cart/cart.component";
import {CheckoutComponent} from "./pages/checkout/checkout.component";
import {OrdersComponent} from "./pages/orders/orders.component";
import {PrivacyPolicyComponent} from "./pages/privacy-policy/privacy-policy.component";
import {ReturnsPolicyComponent} from "./pages/returns-policy/returns-policy.component";
import {ShopComponent} from "./pages/shop/shop.component";
import {SingleProductComponent} from "./pages/single-product/single-product.component";
import {HomeComponent} from "./pages/home/home.component";
import {AboutComponent} from "./pages/about/about.component";
import {AccountComponent} from "./pages/account/account.component";
import {ContactComponent} from "./pages/contact/contact.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'account', component: AccountComponent },
  { path: 'admin-portal', component: AdminPortalComponent },
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'returns-policy', component: ReturnsPolicyComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'single-product', component: SingleProductComponent },
  { path: 't-and-cs', component: TAndCsComponent },
  { path: 'taxonomies', component: TaxonomiesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
