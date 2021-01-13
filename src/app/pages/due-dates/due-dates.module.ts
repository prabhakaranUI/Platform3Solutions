import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DueDatesComponent} from './due-dates.component';
import {RouterModule} from '@angular/router';
import { DailyComponent } from './daily/daily.component';
import {MatTabsModule} from '@angular/material/tabs';
import { FlexLayoutModule } from '@angular/flex-layout';

export const routes = [
  { path: '', component: DueDatesComponent, pathMatch: 'full' }
];
@NgModule({
  declarations: [
    DueDatesComponent,
    DailyComponent
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    FlexLayoutModule,
    RouterModule.forChild(routes)
  ]
})
export class DueDatesModule { }
