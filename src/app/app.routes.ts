import { Routes, RouterModule } from '@angular/router';

// Impor user
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { RegisterClientNaturalComponent } from './pages/register-client-natural/register-client-natural.component';
import { RegisterClientJuridicalComponent } from './pages/register-client-juridical/register-client-juridical.component';
import { AdminClientComponent } from './admin-client/admin-client.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminAdminComponent } from './admin-admin/admin-admin.component';
import { AdminAdminClientComponent } from './admin-admin-client/admin-admin-client.component';
import { AdminAdminChatComponent } from './admin-admin-chat/admin-admin-chat.component';
import { AdminAdminHelpComponent } from './admin-admin-help/admin-admin-help.component';
import { AdminClientChatComponent } from './admin-client-chat/admin-client-chat.component';
import { AdminClientConfigurationComponent } from './admin-client-configuration/admin-client-configuration.component';
import { AdminClientHelpComponent } from './admin-client-help/admin-client-help.component';
import { AdminAdminDashboardComponent } from './admin-admin-dashboard/admin-admin-dashboard.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';


const AppRoutes: Routes = [

  { path: 'iniciar-sesion', component: LoginComponent },
  { path: 'olvidaste-tu-contraseña', component: ForgotPasswordComponent },
  { path: 'admin', component: AdminLoginComponent },
  { path: 'registro-de-persona-natural', component: RegisterClientNaturalComponent },
  { path: 'registro-de-persona-juridica', component: RegisterClientJuridicalComponent },
  { path: 'admin-cliente', component: AdminClientComponent },
  { path: 'admin-cliente-configuration', component: AdminClientConfigurationComponent },
  { path: 'admin-cliente-chat', component: AdminClientChatComponent },
  { path: 'admin-cliente-help', component: AdminClientHelpComponent },
  { path: 'admin-administrador-dashboard', component: AdminAdminDashboardComponent },
  { path: 'admin-administrador', component: AdminAdminComponent },
  { path: 'admin-administrador-cliente', component: AdminAdminClientComponent },
  { path: 'admin-administrador-chat', component: AdminAdminChatComponent },
  { path: 'admin-administrador-ayuda', component: AdminAdminHelpComponent },
  { path: '**', component: LoginComponent },
  { path: '', redirectTo: '/iniciar-sesion', pathMatch: 'full' }

];

export const APP_ROUTES = RouterModule.forRoot( AppRoutes, { useHash: true } );

// export const appRoutingProviders: any[] = [];
// export const routing: ModuleWithProviders = RouterModule.forRoot(AppRoutes);
