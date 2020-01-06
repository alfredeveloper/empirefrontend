import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ServiceService } from '../services/service.service';
import { MatSnackBar, MatDialog } from '@angular/material';
import { ConfirmationDialogComponent } from '../shared/confirmation-dialog/confirmation-dialog.component';
import { Router } from '@angular/router';

export interface PeriodicElement1 {
  ticket: string;
  solicitud: string;
  fecha_solicitud: string;
  fecha_Respuesta: string;
  resultado: string;
  nombre: string;
  dni: string;
  accion: string;
}

export interface PeriodicElement2 {
  ticket: string;
  solicitud: string;
  fecha_solicitud: string;
  fecha_Respuesta: string;
  resultado: string;
  nombre: string;
  ruc: string;
  accion: string;
}

const ELEMENT_DATA1: PeriodicElement1[] = [
  
];

const ELEMENT_DATA2: PeriodicElement2[] = [
  
];
@Component({
  selector: 'app-admin-admin-chat',
  templateUrl: './admin-admin-chat.component.html',
  styleUrls: ['./admin-admin-chat.component.css']
})

export class AdminAdminChatComponent implements OnInit {

  hide = true;
  mode = new FormControl('over');
  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
  
  displayedColumns1: string[] = ['ticket', 'solicitud', 'fecha_solicitud', 'fecha_Respuesta', 'resultado', 'nombre', 'dni', 'accion'];
  displayedColumns2: string[] = ['ticket', 'solicitud', 'fecha_solicitud', 'fecha_Respuesta', 'resultado', 'nombre', 'ruc', 'accion'];
  
  dataSource1 = ELEMENT_DATA1;
  dataSource2 = ELEMENT_DATA2;
  countNotifications: string;

  constructor(
    public dialog: MatDialog,
    private _service: ServiceService,
    private _snackBar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit() {
    this.obtenerNotificaciones()
    this.getNotifications()
  }

  getNotifications() {

    this._service.getNotifications().subscribe(
      response => {
        if(response.status == true) {

          this.countNotifications = response.data.natural.length + response.data.juridical.length;
          console.log(this.countNotifications)
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

  aprobar(id) {
    console.log('aprobado', id)
    let data = {
      requestId: id,
      resultado: "aprobado"
    }
    this._service.changeStatusRequest(data).subscribe(
      response => {
        console.log('response', response)
        
        this.openDialog("Solicitud Aceptada");

        this.obtenerNotificaciones()
      },
      error => {
        console.log('error', error)
        
        this.openDialog("Error en el servidor");
      }
    )
  }

  denegar(id) {
    let data = {
      requestId: id,
      resultado: "rechazado"
    }
    this._service.changeStatusRequest(data).subscribe(
      response => {
        console.log('response', response)
        
        this.openDialog("Solicitud Rechazada");
        this.obtenerNotificaciones()
      },
      error => {
        console.log('error', error)
       
        this.openDialog("Error en el servidor");
      }
    )
  }

  obtenerNotificaciones() {

    this._service.getNotifications().subscribe(
      response => {
        console.log('response', response)
        let naturalArray = []
        response.data.natural.forEach(element => {
          let n = {
            ticket: element.ticket,
            solicitud: element.ticket,
            fecha_solicitud: element.fecha_solicitud,
            fecha_Respuesta: element.fecha_respuesta,
            resultado: element.resultado,
            nombre: element.client.user.nombres,
            dni: element.client.user.numDocumento,
            accion: 'string',
            id: element._id
          }

          naturalArray.push(n)
        });

        this.dataSource1 = naturalArray

        let juridicalArray = []
        response.data.juridical.forEach(element => {
          let n = {
            ticket: element.ticket,
            solicitud: element.ticket,
            fecha_solicitud: element.fecha_solicitud,
            fecha_Respuesta: element.fecha_respuesta,
            resultado: element.resultado,
            nombre: element.client.user.nombres,
            ruc: "20182727342",
            accion: 'string',
            id: element._id
          }

          juridicalArray.push(n)
        });

        this.dataSource2 = juridicalArray
        console.log(this.dataSource2)
      },
      error => {
        console.log('error', error)

      }
    )

  }

  cerrarSesion() {

  }

  irANuevoCliente() {

    this.router.navigate(['/admin-administrador-cliente'])

  }

  irANuevoCambioDeDatos() {

    this.router.navigate(['/admin-administrador-chat'])

  }
}
