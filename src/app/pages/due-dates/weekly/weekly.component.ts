import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-weekly',
  templateUrl: './weekly.component.html',
  styleUrls: ['./weekly.component.scss']
})
export class WeeklyComponent implements OnInit {
  public setFrequency: FormGroup;
  public days: any;
  public daysArray = [
    {day: 'Mon', id: 1, checked: false},
    {day: 'Tue', id: 2, checked: false},
    {day: 'Wed', id: 3, checked: false},
    {day: 'Thu', id: 4, checked: false},
    {day: 'Fri', id: 5, checked: false},
    {day: 'Sat', id: 6, checked: false},
    {day: 'Sun', id: 0, checked: false},
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

  changeDay(event) {
    this.setFrequency.reset();
    this.days = [];
  }
  getResult() {
    if (this.setFrequency.valid) {

      this.days = [];

      for (let d = this.setFrequency.controls.startsBy.value; d <= this.setFrequency.controls.endsBy.value; d.setDate(d.getDate() + 1)) {
        for (let j = 0; j < this.daysArray.length; j++) {
          if (d.getDay() == this.daysArray[j].id && this.daysArray[j].checked) {
            this.days.push(this.datePipe.transform(d, 'dd-MM-yyyy'));
          }
        }
      }
    }

  }
}
