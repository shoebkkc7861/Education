import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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


  getUser() {
    return this.http.get(`${this.myAppUrl}/user/getUsers`)
  }


}




