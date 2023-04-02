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
     
    } 
    id :any = this.route.snapshot.params['id'];
    collection:any=[]
    
 
  

}
