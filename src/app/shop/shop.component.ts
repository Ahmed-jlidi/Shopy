import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
constructor(private service:AuthService,private route: ActivatedRoute,private cookie:CookieService){}

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
  //    for (let i = 1; i < this.collection.length; i++) {
  //    this.service.getbysub(this.collection[i].subcategories[0]).subscribe((data:any)=>{
  //     if(data.data.name==="Trousers" && this.collection[i].category.name==="Female"){
  //       console.log(this.collection[i].category.name , data.data.name )
  //       return true
  //     }else{
  //       return false
  //     }
  //   })
  // }


  })
 }
 cart(id:any){
  console.log(this.id)
  this.service.addcart(id).subscribe( (response) => {
    console.log(response);
  },
  (error) => {
    console.error(error);
  })
 }
 wish(id:any){
  const userId=this.cookie.get('user')
  const data = {userId:JSON.parse(userId)._id,productId:id}
  this.service.addfavorit(data).subscribe((data:any)=>{
    console.log(data)
  })
 }
}
