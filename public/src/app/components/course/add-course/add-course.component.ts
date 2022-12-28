import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/services/course.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

  Course: any

  constructor(private fb: FormBuilder, private service: CourseService) { }

  ngOnInit(): void {

    this.Course = this.fb.group({
      courseName: ['']
    })
  }

  addCourse() {
    this.service.addCourse(this.Course.value).subscribe((data) => {
      return console.log(data)
    })
  }

}
