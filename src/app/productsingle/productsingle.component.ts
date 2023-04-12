import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-productsingle',
  templateUrl: './productsingle.component.html',
  styleUrls: ['./productsingle.component.css']
})
export class ProductsingleComponent implements OnInit {
  constructor(private service:AuthService,private route: ActivatedRoute){}
  
    ngOnInit(): void {
      this.service.getby(this.id).subscribe((data:any)=>{
        this.collection=data.data
        console.log(this.collection)
      })
      console.log(this.collection)
     
    } 

   
    obj={id:this.route.snapshot.params['id'],color:"blue"}
    id :any = this.route.snapshot.params['id'];
    collection:any=[]
    cart(){
      this.service.addcart(this.id).subscribe( (response) => {
        console.log(response);
      },
      (error) => {
        console.error(error);
      })
      
     }
 
  

}
