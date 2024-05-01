import { Routes } from '@angular/router'; 
import { HomeComponent } from './pages/home/home.component';
import { HeaderDetailComponent } from './pages/header-detail/header-detail.component';

export const routes: Routes = [ 
  {
    path: '', title: 'travel  Page', component: HomeComponent,
  },
  {
    path: 'detail/:id', title: 'Details Page', component: HeaderDetailComponent,
  }
];