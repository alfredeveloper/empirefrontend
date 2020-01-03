import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  email: string;

  constructor(
    private _snackBar: MatSnackBar,
    private _service: ServiceService
  ) { }

  ngOnInit() {
  }

  enviar() {
    
    if(this.email == "" || this.email == null || this.email == undefined ) {
      this._snackBar.open('Ingrese su Correo electrónico y Contraseña', null, {
        duration: 2000,
      });
    } else {
      let data = {
        correo: this.email
      }

      this._service.requestChangePassword(data).subscribe(
        response => {
          console.log(response)
          this._snackBar.open('Solicitud de cambio enviada', null, {
            duration: 4000,
          });
        },
        error => {
          console.log(error)
          this._snackBar.open('Error en el servidor', null, {
            duration: 4000,
          });
        }
      )
    }


  }

}
