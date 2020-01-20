import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client.component';
import { LoginGuard } from '../guards/login.guard';
import { AdminClientComponent } from './admin-client/admin-client.component';
import { AdminClientConfigurationComponent } from './admin-client-configuration/admin-client-configuration.component';
import { AdminClientChatComponent } from './admin-client-chat/admin-client-chat.component';
import { AdminClientHelpComponent } from './admin-client-help/admin-client-help.component';
import { AdminAdminChangePasswordComponent } from './admin-admin-change-password/admin-admin-change-password.component';
import { AdminClientChangePasswordComponent } from './admin-client-change-password/admin-client-change-password.component';

const pagesRoutes: Routes = [
  {
    path: '',
    component: ClientComponent,
    canActivate: [LoginGuard],
    children: [
      { path: 'admin-cliente', component: AdminClientComponent },
      { path: 'admin-cliente-configuration', component: AdminClientConfigurationComponent },
      { path: 'admin-cliente-chat', component: AdminClientChatComponent },
      { path: 'admin-cliente-help', component: AdminClientHelpComponent },
      { path: 'admin-cliente-cambio-contraseña', component: AdminAdminChangePasswordComponent },
      { path: 'cambio-de-contraseña', component: AdminClientChangePasswordComponent },  
      { path: '', redirectTo: '/iniciar-sesion', pathMatch: 'full' },
    ]
  }
  
];

export const CLIENT_ROUTES = RouterModule.forChild( pagesRoutes )