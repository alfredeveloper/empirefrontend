import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule, MatButtonModule, MatInputModule, MatIconModule, MatGridListModule, MatTabsModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatCheckboxModule, MatRadioModule } from '@angular/material';
import { ErrorComponent } from './error/error.component';
import { LoginComponent, ChangePasswordClientDialog } from './login/login.component';

import { APP_ROUTES } from './app.routes';
import { RegisterClientNaturalComponent } from './pages/register-client-natural/register-client-natural.component';
import { RegisterClientJuridicalComponent } from './pages/register-client-juridical/register-client-juridical.component';
import { PagesComponent } from './pages/pages.component';
import { AdminComponent } from './admin/admin.component';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminClientComponent } from './admin-client/admin-client.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminAdminComponent } from './admin-admin/admin-admin.component';
import { AdminAdminDashboardComponent } from './admin-admin-dashboard/admin-admin-dashboard.component';
import { AdminAdminClientComponent } from './admin-admin-client/admin-admin-client.component';
import { AdminAdminChatComponent } from './admin-admin-chat/admin-admin-chat.component';
import { AdminAdminHelpComponent } from './admin-admin-help/admin-admin-help.component';
import { AdminClientStatisticsComponent } from './admin-client-statistics/admin-client-statistics.component';
import { AdminClientConfigurationComponent } from './admin-client-configuration/admin-client-configuration.component';
import { AdminClientChatComponent } from './admin-client-chat/admin-client-chat.component';
import { AdminClientHelpComponent } from './admin-client-help/admin-client-help.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminAdminChangePasswordComponent } from './admin-admin-change-password/admin-admin-change-password.component';
import { AdminClientChangePasswordComponent, ChangePasswordFromLinktDialog } from './admin-client-change-password/admin-client-change-password.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ErrorComponent,
    RegisterClientNaturalComponent,
    RegisterClientJuridicalComponent,
    PagesComponent,
    AdminComponent,
    AdminClientComponent,
    AdminLoginComponent,
    AdminAdminComponent,
    AdminAdminDashboardComponent,
    AdminAdminClientComponent,
    AdminAdminChatComponent,
    AdminAdminHelpComponent,
    AdminClientStatisticsComponent,
    AdminClientConfigurationComponent,
    AdminClientChatComponent,
    AdminClientHelpComponent,
    ForgotPasswordComponent,
    ChangePasswordClientDialog,
    AdminAdminChangePasswordComponent,
    AdminClientChangePasswordComponent,
    ChangePasswordFromLinktDialog
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    APP_ROUTES,
    MaterialModule,
    FormsModule,
    MatRadioModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ChangePasswordClientDialog, ChangePasswordFromLinktDialog]
})
export class AppModule { }
