import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

constructor(private service:AuthService){}
arr:any[]=[]
id:any=[]=[]
  ngOnInit(): void {
  
    this.service.getcart().subscribe((data:any)=>{
      //console.log(data)

      this.arr=data.data.cartItems
     // console.log(this.arr)
      JSON.stringify(this.arr)
      this.id=data.data.totalCartPrice
     // console.log(this.id)
    })

  }

  deleteci(index:any){
    let indexs=index._id
    this.service.deletecartid(indexs).subscribe((data:any)=>{
      console.log(data)
    })
   
  } 
  clearc(){
    this.service.clearcart().subscribe((data:any)=>{
      console.log(data)
    })
  }





}
