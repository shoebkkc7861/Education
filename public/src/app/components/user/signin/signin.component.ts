import { Component, OnInit } from '@angular/core';
import { UserService } from "../../../services/user.service"
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {


  signInForm: any


  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.signInForm = new FormGroup({
      userName: new FormControl(''),
      contact: new FormControl(''),
      email: new FormControl('', Validators.required),
      password: new FormControl(''),
      confirmPassword: new FormControl('')
    })
  }

  addUser() {
    this.userService.signIn(this.signInForm.value).subscribe((data) => {
      console.log(data)
    })
  }

}
