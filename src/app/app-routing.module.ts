import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import {PagesComponent} from './pages/pages.component';



const routes: Routes = [{
  path: '',
  component: PagesComponent, children: [
    { path: '', loadChildren: '../app/pages/due-dates/due-dates.module#DueDatesModule'}
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true
  })],
  exports: [RouterModule]
})

export class AppRoutingModule { }






