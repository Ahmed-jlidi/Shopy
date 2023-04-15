import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private cookie:CookieService, private http:HttpClient) { }
  id:any


  url = "http://localhost:5000/api/v1/auth/signup"
  url1 = "http://localhost:5000/api/v1/auth/login"
  url2 = "http://localhost:5000/api/v1/auth/ForgotPassword"
  url3="http://localhost:5000/api/v1/products"
  signup(user:any):Observable<any>{
    return this.http.post<any>(this.url, user);
  }
  signin(user:any):Observable<any>{
    return this.http.post<any>(this.url1, user);
  }
  forget(user:any):Observable<any>{
    return this.http.post<any>(this.url2, user);
  }
  getallproduct():Observable<any>{
    return this.http.get<any>(this.url3);
  }
  getby(id:any):Observable<any>{
    return this.http.get<any>("http://localhost:5000/api/v1/products/"+id);
  }
  getallcat():Observable<any>{
    return this.http.get<any>("http://localhost:5000/api/v1/categories");
  }
  getallsubcat():Observable<any>{
    return this.http.get<any>("http://localhost:5000/api/v1/subcategories");
  }
  addcart(productId:String):Observable<any>{
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.cookie.get("token"));
    const body ={productId}
    return this.http.post<any>("http://localhost:5000/api/v1/cart",body,{headers});
  }
  getbysub(id:any):Observable<any>{
    return this.http.get<any>("http://localhost:5000/api/v1/subcategories/"+id)
  }

  getcart():Observable<any>{
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.cookie.get("token"));
    return this.http.get<any>("http://localhost:5000/api/v1/cart",{headers})
  }
  
  updatepassword(data:any,id:any):Observable<any>{
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.cookie.get("token"));
    return this.http.put<any>("http://localhost:5000/api/v1/users/changePassword/"+id,data,{headers})

  }
  addproduct(data:any):Observable<any>{
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.cookie.get("token"));
    return this.http.post<any>("http://localhost:5000/api/v1/products",data,{headers})
  }
  productbyuser(id:any):Observable<any>{
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.cookie.get("token"));
    return this.http.get<any>("http://localhost:5000/products/"+id,{headers})
  }
  deleteproduct(id:any):Observable<any>{
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.cookie.get("token"));
    return this.http.delete<any>("http://localhost:5000/api/v1/products/"+id,{headers})
  }
  deletecartid(id:any):Observable<any>{
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.cookie.get("token"));
    return this.http.delete<any>("http://localhost:5000/api/v1/cart/"+id,{headers})

    
  }
  clearcart():Observable<any>{
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.cookie.get("token"));
    return this.http.delete<any>("http://localhost:5000/api/v1/cart/",{headers})

    
  }
  addfavorit(data:any):Observable<any>{
    

    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.cookie.get("token"));
    return this.http.post<any>("http://localhost:5000/api/v1/wishlist",data,{headers})

    
  }
  getfav():Observable<any>{
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.cookie.get("token"));
    return this.http.get<any>("http://localhost:5000/api/v1/wishlist",{headers})

  }

  deletefav(id:any):Observable<any>{
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.cookie.get("token"));
    return this.http.delete<any>("http://localhost:5000/api/v1/wishlist/"+id,{headers})
  }


}
