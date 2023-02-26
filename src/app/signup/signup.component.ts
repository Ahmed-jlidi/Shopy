import { Component } from '@angular/core';
import {FormGroup , FormControl} from '@angular/forms'

import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  constructor(private service:AuthService,private routes :Router){}



  registerForm = new FormGroup({
    email :new FormControl(""),
    name :new FormControl(""),
    password :new FormControl(""),
    repassword :new FormControl("")
  })
  reg(){
    this.service.signup(this.registerForm.value).subscribe((data:any)=>{
      console.log(data)
    })

  }
}
