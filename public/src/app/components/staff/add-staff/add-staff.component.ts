import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { StaffService } from 'src/app/services/staff.service';

@Component({
  selector: 'app-add-staff',
  templateUrl: './add-staff.component.html',
  styleUrls: ['./add-staff.component.css']
})
export class AddStaffComponent implements OnInit {
  Users: any = []
  Staff: any

  constructor(private userService: UserService, private fb: FormBuilder, private staffService: StaffService) { }

  ngOnInit(): void {
    this.userService.getUser().subscribe((data) => {
      this.Users = data
    })

    this.Staff = this.fb.group({
      userId: [null],
      designation: [null],
      salary: [null],
      employeCode: [null],
      joinDate: [null]
    })

  }

  addStaff() {
    this.staffService.addStaff(this.Staff.value).subscribe((data) => {
      return console.log(data)
    })
  }


}
