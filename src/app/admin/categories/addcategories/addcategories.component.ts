import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-addcategories',
  templateUrl: './addcategories.component.html',
  styleUrls: ['./addcategories.component.css']
})
export class AddcategoriessComponent {
constructor(private service:AuthService){}
myForm=new FormGroup({
name:new FormControl()
})
addcat(){
this.service.addcat(this.myForm.value).subscribe((data:any)=>{
  console.log(data)
})
}

}
