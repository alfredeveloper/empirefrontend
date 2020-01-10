import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { ADMIN_ROUTES } from './admin.routes';

import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AdminAdminComponent } from './admin-admin/admin-admin.component';
import { AdminAdminDashboardComponent } from './admin-admin-dashboard/admin-admin-dashboard.component';
import { AdminAdminClientComponent } from './admin-admin-client/admin-admin-client.component';
import { AdminAdminChatComponent } from './admin-admin-chat/admin-admin-chat.component';
import { AdminAdminHelpComponent } from './admin-admin-help/admin-admin-help.component';
import { MaterialModule } from '../material.module';

@NgModule({
    declarations: [
        DashboardComponent,
        AdminAdminComponent,
        AdminAdminDashboardComponent,
        AdminAdminClientComponent,
        AdminAdminChatComponent,
        AdminAdminHelpComponent
    ],
    exports: [
        DashboardComponent,
        AdminAdminComponent,
        AdminAdminDashboardComponent,
        AdminAdminClientComponent,
        AdminAdminChatComponent,
        AdminAdminHelpComponent
    ],
    imports: [
        BrowserModule,
        CommonModule,
        SharedModule,
        FormsModule,
        ADMIN_ROUTES,
        MaterialModule
    ],
    providers: [ ]
})

export class AdminModule {
    
}