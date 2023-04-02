import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
constructor(private service:AuthService){}

  ngOnInit(): void {
    this.getdata()
   
  } 
  collection : any[] = []
  p: number = 1;
  result : number = 0
  id: any=0
  link :any = ""
 getdata(){
  this.service.getallproduct().subscribe((data:any)=>{
    this.collection=data.data 
    this.result=data.results
    
     console.log(this.collection)
     console.log(this.id)
  })
 }


}
