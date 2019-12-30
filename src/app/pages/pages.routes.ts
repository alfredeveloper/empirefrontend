import { RouterModule, Routes } from '@angular/router';
import { RegisterClientJuridicalComponent } from './register-client-juridical/register-client-juridical.component';
import { PagesComponent } from './pages.component';
import { LoginGuard } from '../guards/login.guard';

const pagesRoutes: Routes = [
  {
    path: '',
    component: PagesComponent,
    canActivate: [LoginGuard],
    children: [
      { path: 'juridical', component: RegisterClientJuridicalComponent, data: {titulo: 'persona juridica'} },

      
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    ]
  }
  
  ];

  export const ADMIN_ROUTES = RouterModule.forChild( pagesRoutes )