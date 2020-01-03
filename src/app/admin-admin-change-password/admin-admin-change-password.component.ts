import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ServiceService } from '../services/service.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-admin-admin-change-password',
  templateUrl: './admin-admin-change-password.component.html',
  styleUrls: ['./admin-admin-change-password.component.css']
})
export class AdminAdminChangePasswordComponent implements OnInit {

  hide = true;
  hideChange = true;
  hideChangeConfirm = true;

  mode = new FormControl('over');
  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
  
  currentPassword: string;
  newPassword: string;
  newPasswordConfirm: string;

  constructor(
    private _service: ServiceService,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit() {
  }

  cambiarContrasenia() {

    if(this.newPasswordConfirm == "" || this.newPasswordConfirm == undefined || this.newPasswordConfirm == null ||
    this.newPassword == "" || this.newPassword == undefined || this.newPassword == null ||
    this.currentPassword == "" || this.currentPassword == undefined || this.currentPassword == null) {

      this._snackBar.open('Digitar las contraseñas respectivas', null, {
        duration: 3000,
      });

    }else {
      if(this.newPassword == this.newPasswordConfirm) {
        let data = {
          userId: localStorage.getItem('userId'),
          currentContrasenia: this.currentPassword,
          newContrasenia: this.newPassword
        }
    
        this._service.changePasswordAdmin(data).subscribe(
          response => {
            if(response.status == true) {
              this._snackBar.open('Cambio de contraseña exitosa', null, {
                duration: 3000,
              });
            } else {
              this._snackBar.open('Error en la contraseña actual', null, {
                duration: 3000,
              });
            }
            console.log('response', response)
          },
          error => {
            console.log('error', error)
            this._snackBar.open('Error en la contraseña actual', null, {
              duration: 3000,
            });
          }
        )
  
      } else {
        this._snackBar.open('Confirmar la contraseña correctamente', null, {
          duration: 3000,
        });
      }
    }

  }

  cancelar() {
    this.currentPassword = "";
    this.newPassword = "";
    this.newPasswordConfirm = "";
  }

}
