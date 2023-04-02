import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
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
}
