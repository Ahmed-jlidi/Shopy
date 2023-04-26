import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import Swal from 'sweetalert2';

import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-displayuser',
  templateUrl: './displayuser.component.html',
  styleUrls: ['./displayuser.component.css']
})
export class DisplayuserComponent implements OnInit {
constructor(private service:AuthService){}
  arr:any[]=[]  
  arr2:any=""
  p: number = 1;

ngOnInit(): void {
    this.service.displayuser().subscribe((data:any)=>{
      this.arr=data.data
    })
   
  }
  deleteuser(id:any){
    this.service.deleteuser(id._id).subscribe((data:any)=>{
      
      this.arr2=JSON.stringify(data.message)
      Swal.fire({text:"Successfully Deleted",
                confirmButtonColor: 'red'})
    })
    
  }
  

}
