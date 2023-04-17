import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent {
constructor(private service:AuthService){}

myForm=new FormGroup({
  email:new FormControl(""),
  name:new FormControl(""),
  password:new FormControl(""),
  passwordConfirm : new FormControl(""),
  profileImg:new FormControl(""),
  phone:new FormControl(""),
  role:new FormControl("")
})



valider(){
this.service.adduser(this.myForm.value).subscribe((data:any)=>{
  console.log(data)
})
}
}
