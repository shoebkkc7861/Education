import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { environment } from '../../environments/environment'
import { Observable } from 'rxjs';
import { signIn, Login } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private myAppUrl: string
  private myApiUrl: string

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint
    this.myApiUrl = "/user"
  }

  signIn(sign: signIn): Observable<any> {
    return this.http.post(`${this.myAppUrl}${this.myApiUrl}/addUser`, sign)
  }

  Login(log: Login): Observable<any> {
    
    return this.http.post(`${this.myAppUrl}${this.myApiUrl}/login`, log)
  }


  getUser():Observable<any> {
    let header = {
      'x-auth-token':""+localStorage.getItem("x-auth-token")
    }
    return this.http.get(`${this.myAppUrl}/user/getUsers`,{headers:header})
  }

  getToken(){
    let headers = {
      'x-auth-token':localStorage.getItem("x-auth-token")
    }
  }

}




