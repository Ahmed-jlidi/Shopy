import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';
import {enableProdMode} from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';


enableProdMode();
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  constructor(private authService: AuthService,private cookieService: CookieService) {
  }
  
  myForm = new FormGroup({
    email :new FormControl(""),
    password :new FormControl(""),

  })
  onSubmit(){
    this.authService.signin(this.myForm.value).subscribe((data:any)=>{
      console.log(data)
      let expireDate = new Date();
      expireDate.setDate(expireDate.getDate() + 7); 
      this.cookieService.set('token', data.token, expireDate);
      this.cookieService.set('user',JSON.stringify(data.data.user))
     console.log("this is stored token in cookies"+" "+this.cookieService.get('token'),"how zok om l user "+ " "+JSON.stringify(data.data.user))
    })


  }
}
