import { Component, OnInit, Inject } from '@angular/core';

import { initLogin } from '../../assets/js/login';
import { FormControl } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { ServiceService } from '../services/service.service';
import { ConfirmationDialogComponent } from '../shared/confirmation-dialog/confirmation-dialog.component';

export interface DialogData {
  passwordChange: string;
  passwordChangeConfirm: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ServiceService]
})
export class LoginComponent implements OnInit {

  hide = true;
  hideChange = true;
  hideChangeConfirm = true;
  mode = new FormControl('over');
  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
  
  passwordChange: string;
  passwordChangeConfirm: string;

  codigo: string;
  email: string;
  password: string;

  // persona natural
  apellidoPaterno: string;
  departamento: string;
  apellidoMaterno: string;
  provincia: string;
  nombres: string;
  distrito: string;
  direccion: string;
  genero: string;
  tipoDocumento: string;
  numdoc: string;
  fechaNacimiento: string;
  correoElectronico: string;
  telefono: string;
  ocupacion: string;
  centroLaboral: string;

  // persona juridica
  razonSocial: string;
  ruc: string;
  partidaRegistral: string;
  departamentoJuridico: string;
  provinciaJuridico: string;
  distritoJuridico: string;
  direccionJuridico: string;
  sedeRegistral: string;
  telefonoJuridico: string;
  apellidoPaternoJuridico: string;
  apellidoMaternoJuridico: string;
  nombresJuridico: string;
  departamentoJuridicoPersona: string;
  provinciaJuridicoPersona: string;
  distritoJuridicoPersona: string;
  direccionJuridicoPersona: string;
  generoJuridico: string;
  tipoDocumentoJuridico: string;
  numeroDocumentoJuridico: string;
  fechaNacimientoJuridico: string;
  correoElectronicoJuridico: string;
  telefonoJuridicoPersona: string;
  ocupacionJuridico: string;
  centroLaboralJuridico: string;
  
  isNatural = true;

  constructor(
    public dialog: MatDialog,
    private _snackBar: MatSnackBar,
    private _router: Router,
    private _service: ServiceService
  ) { }

  ngOnInit() {
    initLogin();
  }

  IniciarRegistro() {


  }

  ingresarCodigo(sidenav) {

    if( this.codigo == ""  || this.codigo == undefined || this.codigo == null ) {

      this.openDialog('Ingrese su código de verificación')

    } else {
      
      let body = {
        code: this.codigo
      }

      this._service.sendCode(body).subscribe(
        response => {
          
          if(response.status == true) {
            localStorage.setItem('clientId', response.data._id)
            sidenav.toggle()
            if (response.data.typeClient == 'natural') {
              this.isNatural = true
              this.nombres = response.data.user.nombres
              this.apellidoPaterno = response.data.user.apellidoPaterno
              this.apellidoPaterno = response.data.user.apellidoMaterno
              this.correoElectronico = response.data.user.correo
            }else {
              this.isNatural = false
              
              this.correoElectronicoJuridico = response.data.user.correo
            }
          } else {
            
            this.openDialog('Código no existente')
          }
        },
        error => {
          console.log('error', error)

          this.openDialog('Código no existente')
        }
      )

    }

  }

  acceder() {
    if(
      (this.email == "" || this.password == "") ||
      (this.email == null || this.password == null) ||
      (this.email == undefined || this.password == undefined)
    ) {

      this.openDialog('Ingrese su Correo electrónico y Contraseña')
      

    }else {

      let body = {
        correo: this.email,
        contrasenia: this.password
      }

      this._service.login(body).subscribe(
        response => {
          console.log('asdffadsf', response.clientId)

          if(response.status == true) {

            localStorage.setItem('clientId', response.clientId)
            localStorage.setItem('userId', response.data._id)
            localStorage.setItem('clientDirectId', response.clientDirectId)

            if(response.data.contrasenia == undefined || response.data.contrasenia == null || response.data.contrasenia == '') {

              const dialogRef = this.dialog.open(ChangePasswordClientDialog, {
                width: '300px',
                data: {passwordChange: this.passwordChange, passwordChangeConfirm: this.passwordChangeConfirm}
              });
          
              dialogRef.afterClosed().subscribe(result => {
                console.log('The dialog was closed');
                console.log(result)
                if(result.passwordChange == result.passwordChangeConfirm) {
                  let body = {
                    id: localStorage.getItem('userId'),
                    contrasenia: result.passwordChange
                  }
                  this._service.changePassword(body).subscribe(
                    response => {
                      console.log('response', response)
                      this._router.navigate(['/admin-cliente'])

                    },
                    error => {
                      console.log('error', error)
                    }
                  )

                }else {
                  
                  this.openDialog('Las nuevas contraseñas deben coincidir')
                }
              });

            } else {
              this.openDialog('Inicio de sesion exitoso')
              this._router.navigate(['/admin-cliente'])
  
            }

          } else {
            this.openDialog('Credenciales Incorrectas')
          }
          console.log('response', response)
        },
        error => {
          console.log('error', error)
          
          this.openDialog('Credenciales Incorrectas')
        }
      )
      
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

  actualizarDatosPersonales(sidenav) {
    console.log('asdfasf')
    let body = {
      typeClient: "natural",
      apellidoPaterno: this.apellidoPaterno,
      apellidoMaterno: this.apellidoMaterno,
      nombres: this.nombres,
      departamento: this.departamento,
      provincia: this.provincia,
      distrito: this.distrito,
      direccion: this.direccion,
      genero: this.genero,
      tipoDocumento: this.tipoDocumento,
      numDocumento: this.numdoc,
      fechaNacimiento: this.fechaNacimiento,
      correo: this.correoElectronico,
      telefono: this.telefono,
      ocupacion: this.ocupacion,
      centroLaboral: this.centroLaboral,
      id: localStorage.getItem('clientId')
    }

    console.log('body', body)

    this._service.updateClient(body).subscribe(
      response => {
        console.log('response', response);
        alert('Registro completado');
        sidenav.close();
      },
      error => {
        console.log('error', error)
      }
    )

  }

  actualizarDatosJuridicos(sidenav) {
    let body = {
      apellidoPaterno: this.apellidoPaterno
    }

    this._service.updateClient(body).subscribe(
      response => {
        console.log('response', response)
        alert('Registro completado')
        sidenav.close()
      },
      error => {
        console.log('error', error)
        
      }
    )
  }
}

@Component({
  selector: 'change-password-dialog',
  templateUrl: '../components/dialogs/change-password-dialog.html',
})
export class ChangePasswordClientDialog {

  hideChange = true;
  hideChangeConfirm = true;
  hide = true;

  constructor(
    public dialogRef: MatDialogRef<ChangePasswordClientDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }


  

}