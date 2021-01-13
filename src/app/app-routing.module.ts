import { Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {PagesComponent} from './pages/pages.component';



const routes: Routes = [{
  path: '',
  component: PagesComponent, children: [
    { path: '', loadChildren: '../app/pages/due-dates/due-dates.module#DueDatesModule'}
  ]
}];
export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {});





