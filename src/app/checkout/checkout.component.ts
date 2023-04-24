import { Component } from '@angular/core';
import { Alert } from 'bootstrap';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  order(){
    alert('Your Order Is in Process We Will Contact You In Few Hours')
  }
}
