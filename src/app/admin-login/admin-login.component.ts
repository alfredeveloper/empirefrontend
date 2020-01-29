import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { ConfirmationDialogComponent } from '../shared/confirmation-dialog/confirmation-dialog.component';
import { ServiceService } from '../services/service.service';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  email: string;
  password: string;
  hide = true;

  loader = false;
  messageError = '';
  messageButton = 'ACCEDER';

  recuerdame: boolean = false;

  constructor(
    public dialog: MatDialog,
    private _snackBar: MatSnackBar,
    private _router: Router,
    private _auth: AuthenticationService

  ) { }

  ngOnInit() {
    this.isAuth()
  }

  isAuth() {

    if(localStorage.getItem('recuerdame') == 'true'){

      this.recuerdame = true;

      if(localStorage.getItem('currentUserAdmin')) {
        
        this.email = JSON.parse(localStorage.getItem('currentUserAdmin')).email

      }

    }

    const auth = localStorage.getItem('authAdmin');

    if (auth === 'true') {

      this._router.navigate(['/admin-administrador-cliente']);

    }
    
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
    this.messageButton = "VERIFICANDO"
    this.loader = true;

    if(
        (this.email == "" || this.password == "") ||
        (this.email == null || this.password == null) ||
        (this.email == undefined || this.password == undefined)
      ) {
        this.messageButton = "ACCEDER"
        this.loader = false;
        this.messageError = "Ingrese su Correo electrónico y Contraseña";
        // this.openDialog("Ingrese su Correo electrónico y Contraseña");


    } else {
      let data = {
        correo: this.email,
        contrasenia: this.password
      }
      this._auth.loginAdmin(data).subscribe(
        response => {
          
          this.loader = false;
          this.messageButton = 'ACCEDER';
          this._router.navigate(['/admin-administrador-cliente'])

        },
        error => {
          
          this.loader = false;
          this.messageButton = 'ACCEDER';

        }
      )

      /*
      if( this.email == "admin@admin.com" && this.password == "Admin1." ) {

        this._router.navigate(['/admin-administrador-cliente'])

      } else {
        
        this.openDialog("Credenciales no Válidas");

      }
      */

    }

  }

}
