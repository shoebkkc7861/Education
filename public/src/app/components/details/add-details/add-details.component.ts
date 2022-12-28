import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { DetailsService } from "../../../services/details.service"
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-details',
  templateUrl: './add-details.component.html',
  styleUrls: ['./add-details.component.css']
})
export class AddDetailsComponent implements OnInit {

  details: any = FormGroup
  data: any = []

  constructor(private fb: FormBuilder, private detailsServce: DetailsService, router: Router, private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUser().subscribe((users) => {
      this.data = users
    })

    this.details = this.fb.group({
      userId: [null],
      rows: this.fb.array([this.initRows()])
    })

  }

  get formArr() {
    // return this.details.get("rows") as FormArray
    return <FormArray>this.details.controls['rows']
  }

  get f() {
    return this.details.controls;
  }

  initRows() {
    return this.fb.group({
      qualification: [''],
      institute: [''],
      organisation: [''],
      avarageMarks: [''],
      totalMarks: ['']
    });
  }

  addRow() {
    // this.formArr.push(this.initRows)
    // this.formArr.push(this.fb.control(this.initRows))
    (<FormArray>this.details.get("rows")).push(this.initRows())
  }


  onSubmit() {
    this.detailsServce.addDetails(this.details.value).subscribe((data) => {
      console.log(this.details.value)
    })
  }

  delete(index: number) {
    this.formArr.removeAt(index)
  }

  onSelect(data: any) {
    console.log(data.target.value)
  }
}
