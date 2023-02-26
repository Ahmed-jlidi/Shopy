import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  url = "http://localhost:5000/api/signup"
  signup(user:any):Observable<any>{
    return this.http.post<any>(this.url, user);
  }

}
