import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TopBarComponent } from './top-bar/top-bar.component';
import { LeftSidebarComponent } from './left-sidebar/left-sidebar.component';
import { PageTilesComponent } from './page-tiles/page-tiles.component';
import { FooterComponent } from './footer/footer.component';
import { RightSidebarComponent } from './right-sidebar/right-sidebar.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    imports: [
        BrowserModule,
        RouterModule,
        CommonModule,
    ],
    declarations: [
        TopBarComponent,
        LeftSidebarComponent,
        PageTilesComponent,
        FooterComponent,
        RightSidebarComponent,
    ],
    exports: [
        TopBarComponent,
        LeftSidebarComponent,
        PageTilesComponent,
        FooterComponent,
        RightSidebarComponent,
    ]
})

export class SharedModule {
    
}