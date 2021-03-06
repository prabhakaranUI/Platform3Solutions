import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { DatePipe } from '@angular/common';
import * as moment from 'moment';
@Component({
  selector: 'app-daily',
  templateUrl: './daily.component.html',
  styleUrls: ['./daily.component.scss']
})
export class DailyComponent implements OnInit {
  public setFrequency: FormGroup;
  public days: any;
  public weekOff: any;
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
          this.days.push(this.datePipe.transform(d, 'dd-MM-yyyy'));
        } else {
          this.weekOff.push(this.datePipe.transform(d, 'dd-MM-yyyy'));
        }
      }
    }
  }
}
