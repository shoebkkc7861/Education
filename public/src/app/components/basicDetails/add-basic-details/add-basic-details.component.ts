import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { FormBuilder } from '@angular/forms';
import { BasicDetailsService } from 'src/app/services/basic-details.service';

@Component({
  selector: 'app-add-basic-details',
  templateUrl: './add-basic-details.component.html',
  styleUrls: ['./add-basic-details.component.css']
})
export class AddBasicDetailsComponent implements OnInit {

  data: any = []
  basicDetails: any

  constructor(private basicDetailsService: BasicDetailsService, private fb: FormBuilder, private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUser().subscribe((users) => {
      this.data = users
    })

    this.basicDetails = this.fb.group({
      userId: [null],
      lastName: [null],
      firstName: [null],
      middleName: [null],
      fatherName: [null],
      motherName: [null],
      mobileNumber: [null],
      email: [null],
      language: null,
      gender: [null],
      DOB: [null],
      maritalStatus: [null],
      religion: [null],
      cast: [null],
      nationality: [null]
    })



  }
  addDetails() {
    this.basicDetailsService.addDetails(this.basicDetails.value).subscribe((data) => {
      console.log(data)
    })
  }

}
