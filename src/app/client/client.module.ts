import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { CLIENT_ROUTES } from './client.routes';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ChangePasswordFromLinktDialog, AdminClientChangePasswordComponent } from './admin-client-change-password/admin-client-change-password.component';
import { ConfirmationDialogComponent } from '../shared/confirmation-dialog/confirmation-dialog.component';
import { AdminClientComponent } from './admin-client/admin-client.component';
import { AdminClientConfigurationComponent } from './admin-client-configuration/admin-client-configuration.component';
import { AdminClientChatComponent } from './admin-client-chat/admin-client-chat.component';
import { AdminClientHelpComponent } from './admin-client-help/admin-client-help.component';
import { AdminAdminChangePasswordComponent } from './admin-admin-change-password/admin-admin-change-password.component';
import { MaterialModule } from '../material.module';
import { AdminClientStatisticsComponent } from './admin-client-statistics/admin-client-statistics.component';
import { DragDropDirective } from './directives/drag-and-drop.directive';

@NgModule({
    declarations: [
        ChangePasswordFromLinktDialog,
        AdminClientComponent,
        AdminClientConfigurationComponent,
        AdminClientChatComponent,
        AdminClientHelpComponent,
        AdminAdminChangePasswordComponent,
        AdminClientChangePasswordComponent,
        AdminClientStatisticsComponent,
        DragDropDirective
    ],
    exports: [
    ],
    imports: [
        BrowserModule,
        CommonModule,
        SharedModule,
        FormsModule,
        MaterialModule,
        CLIENT_ROUTES,
    ],
    providers: [],
    entryComponents: [
        ChangePasswordFromLinktDialog,
        AdminClientComponent,
        AdminClientConfigurationComponent,
        AdminClientChatComponent,
        AdminClientHelpComponent,
        AdminAdminChangePasswordComponent,
        AdminClientChangePasswordComponent,
        AdminClientStatisticsComponent
    ]
})

export class ClientModule {
    
}