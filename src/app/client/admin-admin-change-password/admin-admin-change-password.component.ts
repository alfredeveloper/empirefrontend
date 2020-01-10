import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ServiceService } from '../../services/service.service';
import { MatSnackBar, MatDialog } from '@angular/material';
import { ConfirmationDialogComponent } from '../../shared/confirmation-dialog/confirmation-dialog.component';
import { Router } from '@angular/router';

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
  countNotifications: string;

  constructor(
    public dialog: MatDialog,
    private _service: ServiceService,
    private _snackBar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit() {
  }

  getNotifications() {

    this._service.getNotifications().subscribe(
      response => {
        if(response == true) {

          this.countNotifications = response.data.natural.length + response.data.juridical.length;
        
        }
      },
      error => {
        console.log('Error ', error)
      }
    )

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

  cambiarContrasenia() {

    if(this.newPasswordConfirm == "" || this.newPasswordConfirm == undefined || this.newPasswordConfirm == null ||
    this.newPassword == "" || this.newPassword == undefined || this.newPassword == null ||
    this.currentPassword == "" || this.currentPassword == undefined || this.currentPassword == null) {

      this.openDialog("Digitar las contraseñas respectivas");

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
              
              this.openDialog("Cambio de contraseña exitosa");

            } else {
              
              this.openDialog("Error en la contraseña actual");

            }
            console.log('response', response)
          },
          error => {
            console.log('error', error)
            
            this.openDialog("Error en la contraseña actual");

          }
        )
  
      } else {
        
        this.openDialog("Confirmar la contraseña correctamente");
      }
    }

  }

  cancelar() {
    this.currentPassword = "";
    this.newPassword = "";
    this.newPasswordConfirm = "";
  }

  irANuevoCliente() {

    this.router.navigate(['/admin-administrador-cliente'])

  }

  irANuevoCambioDeDatos() {

    this.router.navigate(['/admin-administrador-chat'])

  }

  cerrarSesion() {
    
  }

}
