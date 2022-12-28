import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { AddCourse } from '../interfaces/course';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private myAppUrl: string
  private myApiUrl: string
  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint
    this.myApiUrl = "/course"
  }


  addCourse(addCourse: AddCourse): Observable<any> {
    return this.http.post(`${this.myAppUrl}${this.myApiUrl}/addCourse`, addCourse)
  }


}
