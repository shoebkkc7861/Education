import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { AddStaff } from '../interfaces/staff';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StaffService {
  myAppUrl: string
  myApiUrl: string
  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint
    this.myApiUrl = "/staff"
  }

  addStaff(addStaff: AddStaff): Observable<any> {
    return this.http.post(`${this.myAppUrl}${this.myApiUrl}/addStaff`, addStaff)
  }

}
