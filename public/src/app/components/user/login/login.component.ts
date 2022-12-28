import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service'
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: any

  constructor(private fb: FormBuilder, private userService: UserService) { }

  ngOnInit(): void {

    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['']
    })

  }

  login() {
    this.userService.Login(this.loginForm.value).subscribe({
      next: (token) => {
        console.log("login successfull")
        localStorage.setItem('x-auth-token', token)
        let get = localStorage.getItem("token")
        console.log("get", get)
      }
    })
  }
}
