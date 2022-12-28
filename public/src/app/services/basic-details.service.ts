import { Injectable } from '@angular/core';
import { BasicDetails } from '../interfaces/details';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BasicDetailsService {
  private appUrl: string
  constructor(private http: HttpClient) {
    this.appUrl = environment.endpoint;
  }
  addDetails(details: BasicDetails) {
    return this.http.post(`${this.appUrl}/details/addData`, details)
  }
}
