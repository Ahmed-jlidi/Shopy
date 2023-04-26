import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent {
constructor(private service:AuthService){}

myForm=new FormGroup({
  email:new FormControl("",[Validators.required,Validators.email]),
  name:new FormControl("",[Validators.required]),
  password:new FormControl("",[Validators.required,Validators.minLength(6)]),
  passwordConfirm : new FormControl("",[Validators.required,Validators.minLength(6)]),
  profileImg:new FormControl(""),
  phone:new FormControl("",[Validators.required]),
  role:new FormControl("",[Validators.required])
})



valider(){
this.service.adduser(this.myForm.value).subscribe((data:any)=>{
  console.log(data)
  Swal.fire("user added successfully")
  this.myForm.reset()
})
}
}
