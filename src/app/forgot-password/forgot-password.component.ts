import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatDialog } from '@angular/material';
import { ServiceService } from '../services/service.service';
import { ConfirmationDialogComponent } from '../shared/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  email: string;

  constructor(
    public dialog: MatDialog,
    private _snackBar: MatSnackBar,
    private _service: ServiceService
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
  
  enviar() {
    
    if(this.email == "" || this.email == null || this.email == undefined ) {
      
      this.openDialog("Ingrese su Correo electrónico y Contraseña");

    } else {
      let data = {
        correo: this.email
      }

      this._service.requestChangePassword(data).subscribe(
        response => {
          console.log(response)
          
          this.openDialog("Solicitud de cambio enviada");

        },
        error => {
          console.log(error)
          
          this.openDialog("Error en el servidor");

        }
      )
    }


  }

}
