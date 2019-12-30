import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

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
    private _snackBar: MatSnackBar,
    private _router: Router

  ) { }

  ngOnInit() {
  }

  acceder() {

    if(
        (this.email == "" || this.password == "") ||
        (this.email == null || this.password == null) ||
        (this.email == undefined || this.password == undefined)
      ) {

        this._snackBar.open('Ingrese su Correo electrónico y Contraseña', null, {
          duration: 2000,
        });

    } else {
      if( this.email == "admin@admin.com" && this.password == "Admin1." ) {

        this._router.navigate(['/admin-administrador-cliente'])

      } else {
        this._snackBar.open('Credenciales no Válidas', null, {
          duration: 2000,
        });
      }
    }

  }

}
