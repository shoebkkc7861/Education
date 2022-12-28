import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { MonthlyFees } from '../interfaces/monthlyFees';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MonthlyFeesService {
  myAppUrl: string
  myApiUrl: string
  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint
    this.myApiUrl = "/monthlyFees"
  }

  addFees(monthlyFees: MonthlyFees): Observable<any> {
    return this.http.post(`${this.myAppUrl}${this.myApiUrl}/addFees`, monthlyFees)
  }
}
