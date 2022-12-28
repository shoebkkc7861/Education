import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from "../../environments/environment"
import { Details } from "../interfaces/details"

@Injectable({
  providedIn: 'root'
})
export class DetailsService {
  private appUrl: string
  constructor(private http: HttpClient) {
    this.appUrl = environment.endpoint;
  }

  addDetails(details: Details): Observable<any> {
    return this.http.post(`${this.appUrl}/education/addEducation`, details)
  }




} 
