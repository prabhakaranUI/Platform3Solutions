import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-yearly',
  templateUrl: './yearly.component.html',
  styleUrls: ['./yearly.component.scss']
})
export class YearlyComponent implements OnInit {
  public setFrequency: FormGroup;
  public days: any;
  public selectedMonth: any;
  public getDay: number;
  public monthArray = [
    {month: 'Jan', id: 0, checked: false},
    {month: 'Feb', id: 1, checked: false},
    {month: 'Mar', id: 2, checked: false},
    {month: 'Apr', id: 3, checked: false},
    {month: 'May', id: 4, checked: false},
    {month: 'Jan', id: 5, checked: false},
    {month: 'Jul', id: 6, checked: false},
    {month: 'Aug', id: 7, checked: false},
    {month: 'Sep', id: 8, checked: false},
    {month: 'Oct', id: 9, checked: false},
    {month: 'Nov', id: 10, checked: false},
    {month: 'Dec', id: 11, checked: false},
  ];
  constructor(public fb: FormBuilder, public datePipe: DatePipe) {
    this.days = [];
    this.setFrequency = this.fb.group({
      startsBy: ['', Validators.required],
      endsBy: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  changeMonth(event) {
    this.selectedMonth = event.value;
    this.setFrequency.reset();
    this.days = [];
  }
  getResult() {
    if (this.setFrequency.valid) {
      this.days = [];
      for (let d = this.setFrequency.controls.startsBy.value; d <= this.setFrequency.controls.endsBy.value; d.setDate(d.getDate() + 1)) {
          if (d.getMonth() == this.selectedMonth) {
            if(d.getDate() == this.getDay) {
              this.days.push(this.datePipe.transform(d, 'dd-MM-yyyy'));
            }
          }
      }
    }

  }

}
