import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-addsubcategories',
  templateUrl: './addsubcategories.component.html',
  styleUrls: ['./addsubcategories.component.css']
})
export class AddsubcategoriesComponent implements OnInit {
constructor(private service:AuthService){}
arr:any[]=[]
  ngOnInit(): void {
this.service.getallcat().subscribe((data:any)=>{
  this.arr=data.data
  console.log(data.data)
})
  }
myForm = new FormGroup({
  name:new FormControl(),
  category:new FormControl()
})
addcat(){
  this.service.addsubcat(this.myForm.value).subscribe((data:any)=>{
    console.log(data)
  })
}
}
