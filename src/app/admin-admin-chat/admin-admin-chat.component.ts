import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ServiceService } from '../services/service.service';
import { MatSnackBar } from '@angular/material';

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

  constructor(
    private _service: ServiceService,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.obtenerNotificaciones()
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
        this._snackBar.open('Solicitud Aceptada', null, {
          duration: 2000,
        });
        this.obtenerNotificaciones()
      },
      error => {
        console.log('error', error)
        this._snackBar.open('Error en el servidor', null, {
          duration: 2000,
        });

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
        this._snackBar.open('Solicitud Rechazada', null, {
          duration: 2000,
        });
        this.obtenerNotificaciones()
      },
      error => {
        console.log('error', error)
        this._snackBar.open('Error en el servidor', null, {
          duration: 2000,
        });
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
}
