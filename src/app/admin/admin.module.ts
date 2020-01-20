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
import { NaturalComponent } from './admin-admin-client/natural/natural.component';
import { JuridicalComponent } from './admin-admin-client/juridical/juridical.component';
import { RejectedsComponent } from './admin-admin-chat/rejecteds/rejecteds.component';
import { AcceptedsComponent } from './admin-admin-chat/accepteds/accepteds.component';
import { NaturalNotificationComponent } from './admin-admin-chat/natural-notification/natural-notification.component';
import { JuridicalNotificationComponent } from './admin-admin-chat/juridical-notification/juridical-notification.component';

@NgModule({
    declarations: [
        DashboardComponent,
        AdminAdminComponent,
        AdminAdminDashboardComponent,
        AdminAdminClientComponent,
        AdminAdminChatComponent,
        AdminAdminHelpComponent,
        NaturalComponent,
        JuridicalComponent,
        RejectedsComponent,
        AcceptedsComponent,
        NaturalNotificationComponent,
        JuridicalNotificationComponent
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