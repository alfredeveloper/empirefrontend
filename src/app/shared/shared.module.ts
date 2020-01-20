import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TopBarComponent } from './top-bar/top-bar.component';
import { LeftSidebarComponent } from './left-sidebar/left-sidebar.component';
import { PageTilesComponent } from './page-tiles/page-tiles.component';
import { FooterComponent } from './footer/footer.component';
import { RightSidebarComponent } from './right-sidebar/right-sidebar.component';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '../material.module';
import { ErrorComponent } from './dialogs/error/error.component';
import { SuccessComponent } from './dialogs/success/success.component';
import { ConfirmationComponent } from './dialogs/confirmation/confirmation.component';
import { UploadFileComponent } from './upload-file/upload-file.component';

@NgModule({
    imports: [
        BrowserModule,
        RouterModule,
        CommonModule,
        MaterialModule
    ],
    declarations: [
        TopBarComponent,
        LeftSidebarComponent,
        PageTilesComponent,
        FooterComponent,
        RightSidebarComponent,
        ErrorComponent,
        SuccessComponent,
        ConfirmationComponent,
        UploadFileComponent,
    ],
    exports: [
        TopBarComponent,
        LeftSidebarComponent,
        PageTilesComponent,
        FooterComponent,
        RightSidebarComponent,
        UploadFileComponent
    ],
    entryComponents: [
        ErrorComponent,
        SuccessComponent,
        ConfirmationComponent,
        UploadFileComponent
    ]
})

export class SharedModule {
    
}