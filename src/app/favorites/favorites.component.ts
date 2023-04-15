import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
constructor(private service:AuthService){}
arr:any[]=[]
  ngOnInit(): void {
    this.service.getfav().subscribe((data)=>{
      this.arr=data.data
      console.log(data)
    })
  }
  addcart(id:any){
    this.service.addcart(id._id).subscribe((data:any)=>{
      console.log(data)
    })

  }
  deletefav(index:any){
    this.service.deletefav(index._id).subscribe((data:any)=>{
      console.log(data)
    })
  }
  



}
