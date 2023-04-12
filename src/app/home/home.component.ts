import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service:AuthService) { }
  //Slider settings
  slideConfig = {"slidesToShow": 1, "slidesToScroll": 1} ;
  women:String=""
  male:String=""
  sub:any=[]

  ngOnInit(): void {
    this.service.getallcat().subscribe((data:any)=>{
      this.women=data.data[1].name
      this.male=data.data[0].name
    })
    this.service.getallsubcat().subscribe((data:any)=>{
      console.log(data.data)
     this.sub=data.data
    })
  }

}