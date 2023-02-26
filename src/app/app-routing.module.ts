import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AddressComponent } from './address/address.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditAddressComponent } from './edit-address/edit-address.component';
import { ErrComponent } from './err/err.component';
import { FaqsComponent } from './faqs/faqs.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { OrdersComponent } from './orders/orders.component';
import { ProductsingleComponent } from './productsingle/productsingle.component';
import { AddproductComponent } from './productuser/addproduct/addproduct.component';
import { DisplayproductComponent } from './productuser/displayproduct/displayproduct.component';
import { UpdateproductComponent } from './productuser/updateproduct/updateproduct.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { ShopComponent } from './shop/shop.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path:"",component:HomeComponent
  },
  
  {
    path:"product-single",component:ProductsingleComponent
  },
  {
    path:"address",component:AddressComponent
  } ,
  {
  path:"cart",component:CartComponent  
  },
  {
    path:"checkout",component:CheckoutComponent
  },
  {
    path:"dashboard",component:DashboardComponent
  },
  {
    path:"edit-address",component:EditAddressComponent
  },
  {
    path:"forgot-password",component:ForgotPasswordComponent
  },
  {
    path:"login",component:LoginComponent
  },
  {
    path:"order",component:OrdersComponent
  },
  {
    path:"profile-details",component:ProfileDetailsComponent
  },
  {
    path:"shop",component:ShopComponent
  },
  {
    path:"signup",component:SignupComponent
  },
  {
    path:"faq",component:FaqsComponent
  },
  {
    path:"about",component:AboutComponent
  },
  //  user add product 
  {
    path:"addproduct",component:AddproductComponent
  },
  {
    path:"updateproduct",component:UpdateproductComponent
  },
  {
    path:"displayproduct",component:DisplayproductComponent
  },
  //////////////////////////////////////////////////
  // admin product and user
  {
    path:"admin/useradd",component:DisplayproductComponent
  },
  {
    path:"admin/userdelete",component:DisplayproductComponent
  },
  {
    path:"admin/addproduct",component:DisplayproductComponent
  },
  {
    path:"admin/updateproduct",component:DisplayproductComponent
  },
  {
    path:"admin/deleteproduct",component:DisplayproductComponent
  },
  {
    path:"contact",component:ContactComponent
  },
  {
    path:"**",component:ErrComponent
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
