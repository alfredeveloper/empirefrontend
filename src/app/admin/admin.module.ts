import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { ADMIN_ROUTES } from './admin.routes';

import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    declarations: [
        DashboardComponent
    ],
    exports: [
        DashboardComponent,
    ],
    imports: [
        BrowserModule,
        CommonModule,
        SharedModule,
        FormsModule,
        
        ADMIN_ROUTES
    ],
    providers: [ ]
})

export class AdminModule {
    
}