import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { ConfirmationDialogComponent } from '../shared/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  email: string;
  password: string;
  hide = true;

  constructor(
    public dialog: MatDialog,
    private _snackBar: MatSnackBar,
    private _router: Router

  ) { }

  ngOnInit() {
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
  
  acceder() {

    if(
        (this.email == "" || this.password == "") ||
        (this.email == null || this.password == null) ||
        (this.email == undefined || this.password == undefined)
      ) {

        
        this.openDialog("Ingrese su Correo electrónico y Contraseña");


    } else {
      if( this.email == "admin@admin.com" && this.password == "Admin1." ) {

        this._router.navigate(['/admin-administrador-cliente'])

      } else {
        
        this.openDialog("Credenciales no Válidas");

      }
    }

  }

}
