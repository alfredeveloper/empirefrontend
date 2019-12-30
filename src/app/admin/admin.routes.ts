import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { LoginGuard } from '../guards/login.guard';
import { DashboardComponent } from './dashboard/dashboard.component';


const pagesRoutes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [LoginGuard],
    children: [
      { path: 'dashboard', component: DashboardComponent, data: {titulo: 'Dashboard'} },
      
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    ]
  }
  
];

export const ADMIN_ROUTES = RouterModule.forChild( pagesRoutes )