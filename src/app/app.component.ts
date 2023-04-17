import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angularshop';
  user:any
  constructor(private cookie:CookieService){}
  ngOnInit(): void {
    
  }

  
  
  checknavbar(){
    this.user=JSON.parse(this.cookie.get("user"))
    // if(this.user.role==="admin"){
    //   return false
    // }else{
    //   return true
    // }
    
  }
  

}
