import { Component } from '@angular/core';
import { Alert } from 'bootstrap';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  order(){
    Swal.fire({
    title:"Would you like to confirm order",
    
    confirmButtonColor: 'green',
    confirmButtonText: 'yes',
    cancelButtonText: 'no',
    cancelButtonColor: 'red',
    showCancelButton: true,

  })  }
}
