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

  loader = false;
  messageError = '';
  messageSuccess = '';
  messageButton = 'ENVIAR';
  
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
    this.loader = true;
    this.messageButton = "ENVIANDO";

    if(this.email == "" || this.email == null || this.email == undefined ) {
      
      this.messageError = "Ingrese su Correo Electrónico" 
      this.loader = false;
      this.messageButton = "ENVIAR";
      // this.openDialog("Ingrese su Correo electrónico");
      

    } else {
      let data = {
        correo: this.email
      }

      this._service.requestChangePassword(data).subscribe(
        response => {
          console.log(response)
          if(response.status == true) {
            this.loader = false;
            this.messageButton = "ENVIAR";
            this.messageSuccess = "Correo electrónico enviado";

          } else {
            this.loader = false;
            this.messageError = "ENVIAR";
            this.messageError = "Correo electrónico no encontrado"
          }

        },
        error => {
          console.log(error)
          this.loader = false;
          this.messageButton = "ENVIAR";
          this.messageError = "Correo electrónico no encontrado"          
          // this.openDialog("Error en el servidor");

        }
      )
    }


  }

  clean() {

    this.messageError = '';
    this.messageSuccess = '';
  }

}
