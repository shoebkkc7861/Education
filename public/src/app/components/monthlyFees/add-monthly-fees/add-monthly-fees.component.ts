import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MonthlyFeesService } from 'src/app/services/monthly-fees.service';

@Component({
  selector: 'app-add-monthly-fees',
  templateUrl: './add-monthly-fees.component.html',
  styleUrls: ['./add-monthly-fees.component.css']
})
export class AddMonthlyFeesComponent implements OnInit {
  monthlyFees: any
  constructor(private service: MonthlyFeesService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.monthlyFees = this.fb.group({
      startDate: [''],
      endDate: ['']
    })
  }

  addFees() {
    this.service.addFees(this.monthlyFees.value).subscribe((data) => {
      return console.log(data)
    })
  }

}
