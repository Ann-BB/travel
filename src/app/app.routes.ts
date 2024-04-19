import { Routes } from '@angular/router';
import { HeaderDetailComponent } from './content/pages/header-detail/header-detail.component';
import { HomeComponent } from './content/pages/home/home.component';

export const routes: Routes = [ 
  {
    path: '', title: 'travel  Page', component: HomeComponent,
  },
  {
    path: 'detail/:id', title: 'Details Page', component: HeaderDetailComponent,
  }
];