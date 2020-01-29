import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { LoginAdminGuard } from '../guards/login-admin.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminAdminComponent } from './admin-admin/admin-admin.component';
import { AdminAdminDashboardComponent } from './admin-admin-dashboard/admin-admin-dashboard.component';
import { AdminAdminClientComponent } from './admin-admin-client/admin-admin-client.component';
import { AdminAdminChatComponent } from './admin-admin-chat/admin-admin-chat.component';
import { AdminAdminHelpComponent } from './admin-admin-help/admin-admin-help.component';


const pagesRoutes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [LoginAdminGuard],
    children: [
      { path: 'dashboard', component: DashboardComponent, data: {titulo: 'Dashboard'} },
      { path: 'admin-usuarios', component: AdminAdminComponent },
      { path: 'admin-administrador-dashboard', component: AdminAdminDashboardComponent },
      { path: 'admin-administrador-cliente', component: AdminAdminClientComponent },
      { path: 'admin-administrador-chat', component: AdminAdminChatComponent },
      { path: 'admin-administrador-ayuda', component: AdminAdminHelpComponent },

      { path: '', redirectTo: '/iniciar-sesion', pathMatch: 'full' },
    ]
  }
  
];

export const ADMIN_ROUTES = RouterModule.forChild( pagesRoutes )