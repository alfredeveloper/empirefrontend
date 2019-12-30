import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  email: string;

  constructor(
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit() {
  }

  enviar() {
    
    if(this.email == "" || this.email == null || this.email == undefined ) {
      this._snackBar.open('Ingrese su Correo electrónico y Contraseña', null, {
        duration: 2000,
      });
    } else {

    }


  }

}
