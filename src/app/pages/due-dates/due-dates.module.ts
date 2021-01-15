import {NgModule } from '@angular/core';
import {CommonModule } from '@angular/common';
import {DueDatesComponent} from './due-dates.component';
import {RouterModule} from '@angular/router';
import {DailyComponent } from './daily/daily.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {FlexLayoutModule } from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatNativeDateModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { DatePipe } from '@angular/common';
import {MatListModule} from '@angular/material/list';
import { WeeklyComponent } from './weekly/weekly.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDividerModule} from '@angular/material/divider';
import { MonthlyComponent } from './monthly/monthly.component';
import { YearlyComponent } from './yearly/yearly.component';
import {MatRadioModule} from '@angular/material/radio';


export const routes = [
  { path: '', component: DueDatesComponent, pathMatch: 'full' }
];
@NgModule({
  declarations: [
    DueDatesComponent,
    DailyComponent,
    WeeklyComponent,
    MonthlyComponent,
    YearlyComponent
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    FlexLayoutModule,
    MatCheckboxModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatListModule,
    MatDividerModule,
    FormsModule,
    MatRadioModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    DatePipe
  ]
})
export class DueDatesModule { }
