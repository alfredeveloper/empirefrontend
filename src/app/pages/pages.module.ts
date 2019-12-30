import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { ADMIN_ROUTES } from './pages.routes';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
    ],
    exports: [
    ],
    imports: [
        BrowserModule,
        CommonModule,
        SharedModule,
        FormsModule,
        ADMIN_ROUTES,
    ],
    providers: []
})

export class PagesModule {
    
}