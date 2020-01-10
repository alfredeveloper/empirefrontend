import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule, MatButtonModule, MatInputModule, MatIconModule, MatGridListModule, MatTabsModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatCheckboxModule, MatRadioModule } from '@angular/material';
import { ErrorComponent } from './error/error.component';
import { LoginComponent, ChangePasswordClientDialog } from './login/login.component';

import { APP_ROUTES } from './app.routes';
import { ClientComponent } from './client/client.component';
import { AdminComponent } from './admin/admin.component';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { AdminModule } from './admin/admin.module';
import { ConfirmationDialogComponent } from './shared/confirmation-dialog/confirmation-dialog.component';
import { ClientModule } from './client/client.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ErrorComponent,
    ClientComponent,
    AdminComponent,
    AdminLoginComponent,
    ForgotPasswordComponent,
    ChangePasswordClientDialog,
    ConfirmationDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    APP_ROUTES,
    FormsModule,
    MatRadioModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    SharedModule,
    AdminModule,
    ClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    ChangePasswordClientDialog,
    ConfirmationDialogComponent
    
  ]
})
export class AppModule { }
