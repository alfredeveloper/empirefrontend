import { Component, OnInit, Inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog, MatSnackBar } from '@angular/material';
import { ServiceService } from '../services/service.service';
import { Router } from '@angular/router';
import { ConfirmationDialogComponent } from '../shared/confirmation-dialog/confirmation-dialog.component';

export interface DialogData {
  passwordChange: string;
  passwordChangeConfirm: string;
}

@Component({
  selector: 'app-admin-client-change-password',
  templateUrl: './admin-client-change-password.component.html',
  styleUrls: ['./admin-client-change-password.component.css']
})
export class AdminClientChangePasswordComponent implements OnInit {

  hide = true;
  mode = new FormControl('over');
  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
  
  passwordChange: string;
  passwordChangeConfirm: string;

  constructor(
    public dialog: MatDialog,
    private _service: ServiceService,
    private _router: Router,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.abrirModalDeActualizacion();
  }

  openDialog(message): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '300px',
      data: message
    })

    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        console.log('Si')
      }
    })
  }

  abrirModalDeActualizacion() {
    const dialogRef = this.dialog.open(ChangePasswordFromLinktDialog, {
      width: '300px',
      disableClose: true,
      data: {passwordChange: this.passwordChange, passwordChangeConfirm: this.passwordChangeConfirm}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result)
      if(result.passwordChange == result.passwordChangeConfirm) {
        let body = {
          userId: localStorage.getItem('userId'),
          newContrasenia: result.passwordChange
        }
        this._service.changePasswordFromLink(body).subscribe(
          response => {
            console.log('response', response)
            if(response.status == true) {

              this._router.navigate(['/iniciar-sesion'])
            }else {
              
              this.openDialog("Error al actualizar");

            }

          },
          error => {
            console.log('error', error)
          }
        )

      }else {
        
        this.openDialog("Las nuevas contraseñas deben coincidir");

      }
    });
  }

}

@Component({
  selector: 'change-password-dialog',
  templateUrl: '../components/dialogs/change-password-dialog.html',
})
export class ChangePasswordFromLinktDialog {

  hideChange = true;
  hideChangeConfirm = true;
  hide = true;

  constructor(
    public dialogRef: MatDialogRef<ChangePasswordFromLinktDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }


  

}