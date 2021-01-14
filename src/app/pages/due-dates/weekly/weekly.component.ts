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
  public weekOff: any;
  public selectDay: any;


  public daysArray = [
    {day: 'Mon', id: 1},
    {day: 'Tue', id: 2},
    {day: 'Wed', id: 3},
    {day: 'Thu', id: 4},
    {day: 'Fri', id: 5},
    {day: 'Sat', id: 6},
    {day: 'Sun', id: 0},
    ];
  constructor(public fb: FormBuilder, public datePipe: DatePipe) {
    this.days = [];
    this.weekOff = [];
    this.setFrequency = this.fb.group({
      startsBy: ['', Validators.required],
      endsBy: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  getResult() {
    if (this.setFrequency.valid) {
      this.days = [];
      this.weekOff = [];
      for (let d = this.setFrequency.controls.startsBy.value; d <= this.setFrequency.controls.endsBy.value; d.setDate(d.getDate() + 1)) {
        if (d.getDay() != 0 && d.getDay() != 6) {  // 0 is Sunday and 6 is Saturday Weekly off
          this.days.push(this.datePipe.transform(d, 'EEE-MM-yyyy'));
        } else {
          this.weekOff.push(this.datePipe.transform(d, 'EEE-MM-yyyy'));
        }
      }
    }
  }

}
