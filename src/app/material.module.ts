import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


// Dependencies
import {
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    MatChipsModule,
    MatCardModule,
    MatGridListModule,
    MatDialogModule,
    MatListModule,
    MatRadioModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSidenavModule,
    MatSelectModule,
    MatTabsModule,
    MatTableModule,
    MatInputModule,
    MatSnackBarModule,
    MatMenuModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatBadgeModule
} from '@angular/material';

@NgModule({
 imports:  [
   MatProgressSpinnerModule,
   MatIconModule,
   MatButtonModule,
   MatCardModule,
   MatCheckboxModule,
   MatChipsModule,
   MatGridListModule,
   MatDialogModule,
   MatInputModule,
   MatListModule,
   MatProgressBarModule,
   MatRadioModule,
   MatSelectModule,
   MatSliderModule,
   MatSlideToggleModule,
   MatSnackBarModule,
   MatMenuModule,
   MatSidenavModule,
   MatTabsModule,
   MatTableModule,
   MatNativeDateModule,
   MatDatepickerModule,
   MatBadgeModule
 ],
 exports:[
   MatProgressBarModule,
   MatProgressSpinnerModule,
   MatIconModule,
   MatButtonModule,
   MatCheckboxModule,
   MatCardModule,
   MatGridListModule,
   MatChipsModule,
   MatListModule,
   MatRadioModule,
   MatSelectModule,
   MatSliderModule,
   MatSidenavModule,
   MatSlideToggleModule,
   MatTabsModule,
   MatTableModule,
   MatDialogModule,
   MatInputModule,
   MatSnackBarModule,
   MatMenuModule,
   MatTableModule,
   MatNativeDateModule,
   MatDatepickerModule,
   MatBadgeModule
 ]
})
export class MaterialModule { }
