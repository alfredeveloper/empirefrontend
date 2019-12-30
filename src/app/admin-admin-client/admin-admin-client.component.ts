import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { ServiceService } from '../services/service.service';
import { trigger, state, transition, style, animate } from '@angular/animations';

export interface PeriodicElement1 {
  Razon_Social: string;
  Nombre_Comercial: string;
  RUC: string;
  Correo: string;
  Estado: string;
  Accion: string;
}

export interface PeriodicElement2 {
  Nombres: string;
  Apellidos: string;
  DNI: string;
  Correo: string;
  Estado: string;
  Accion: string;
}



const ELEMENT_DATA1: PeriodicElement1[] = [
  {
    Razon_Social: 'Constructora',
    Nombre_Comercial: 'Juarez',
    RUC: '20654326548',
    Correo: 'juarez@gmail.com',
    Estado: `Creado.`,
    Accion: 'Accion'
  },
   
];

const ELEMENT_DATA2: PeriodicElement2[] = [
  {
    Nombres: 'Alfredo',
    Apellidos: 'Yupanqui',
    DNI: '70396823',
    Correo: 'alfredo@gmail.com',
    Estado: `Creado`,
    Accion: `Accion`
  },
  
];

@Component({
  selector: 'app-admin-admin-client',
  templateUrl: './admin-admin-client.component.html',
  styleUrls: ['./admin-admin-client.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class AdminAdminClientComponent implements OnInit {

  dataSource1 = ELEMENT_DATA1;
  columnsToDisplay1 = ['Razon_Social', 'Nombre_Comercial', 'RUC', 'Correo', 'Estado', 'Accion'];
  expandedElement1: PeriodicElement1 | null;

  dataSource2 = ELEMENT_DATA2;
  columnsToDisplay2 = ['Nombres', 'Apellidos', 'DNI', 'Correo', 'Estado', 'Accion'];
  expandedElement2: PeriodicElement2 | null;

  apellidoPaterno: string;
  apellidoMaterno: string;
  nombres: string;
  correoElectronicoPersona: string;

  razonSocial: string;
  nombreComercial: string;
  ruc: string;
  correoElectronicoEmpresa: string;
  

  hide = true;
  mode = new FormControl('over');
  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
  
  animal: string;
  name: string;
  
  constructor(
    private _snackBar: MatSnackBar,
    private _service: ServiceService
  ) { }

  ngOnInit() {
    this.obtenerClientes()
  }

  registrarNatural(sidenavAddClient) {

    if(this.apellidoPaterno == "" || this.apellidoPaterno == null || this.apellidoPaterno == undefined ||
    this.apellidoMaterno == "" || this.apellidoMaterno == null ||this.apellidoMaterno == undefined ||
    this.nombres == "" || this.nombres == null || this.nombres == undefined ||
    this.correoElectronicoPersona == "" || this.correoElectronicoPersona == null || this.correoElectronicoPersona == undefined
    ) {

      this._snackBar.open('Ingrese todos los campos', null, {
        duration: 2000,
      });

    } else {
      let body = {
        apellidoPaterno: this.apellidoPaterno,
        apellidoMaterno: this.apellidoMaterno,
        nombres: this.nombres,
        correo: this.correoElectronicoPersona,
        tipoCliente: "natural"
      }

      this._service.registerClient(body).subscribe(
        response => {
          console.log('response', response)
          alert('Tu código de verificacion es: ' + response.data.client.code)
          sidenavAddClient.close()
        },
        error => {
          console.log('error', error)

        }
      )
    }

  }

  registrarJuridica(sidenavAddClient) {
    if(this.razonSocial == "" || this.razonSocial == null || this.razonSocial == undefined ||
    this.ruc == "" || this.ruc == null ||this.ruc == undefined ||
    this.nombreComercial == "" || this.nombreComercial == null || this.nombreComercial == undefined ||
    this.correoElectronicoEmpresa == "" || this.correoElectronicoEmpresa == null || this.correoElectronicoEmpresa == undefined
    ) {

      this._snackBar.open('Ingrese todos los campos', null, {
        duration: 2000,
      });

    } else {
      let body = {
        razonSocial: this.razonSocial,
        ruc: this.ruc,
        nombreComercial: this.nombreComercial,
        correo: this.correoElectronicoEmpresa,
        tipoCliente: "juridical"
       
      }

      this._service.registerClient(body).subscribe(
        response => {
          console.log('response', response)
          alert('Tu código de verificacion es: ' + response.data.client.code)
          sidenavAddClient.close()
        },
        error => {
          console.log('error', error)

        }
      )
    }
  }

  obtenerClientes() {
    this._service.getClients().subscribe(
      response => {
        console.log('response', response)
        let naturalArray = []
        response.data.natural.forEach(element => {
          let n = {
            Nombres: element.client.user.nombres,
            Apellidos: element.client.user.apellidoPaterno + ' ' + element.client.user.apellidoMaterno,
            DNI: element.client.user.numDocumento,
            Correo: element.client.user.correo,
            Estado: element.client.user.status,
            Accion: `Accion`,
            id: element.client.user._id,
            status: element.client.user.status

          }

          naturalArray.push(n)
        });

        let juridicalArray = []

        response.data.juridical.forEach(element => {
          let j = {
            Razon_Social: element.razonSocial,
            Nombre_Comercial: element.partidaRegistral,
            RUC: element.ruc,
            Correo: element.client.user.correo,
            Estado: element.client.user.status,
            Accion: 'Accion',
            id: element.client.user._id,
            status: element.client.user.status
          }

          juridicalArray.push(j)
        });

        this.dataSource1 = juridicalArray;
        this.dataSource2 = naturalArray;

        console.log('data1', juridicalArray)
        console.log('data2', naturalArray)
      },
      error => {
        console.log('error', error)
      }
    )
  }

  aceptar(id) {
    console.log('id', id)

    let data = {
      "id": id,
      "status": "aceptado"
    }
    this._service.changeStatus(data).subscribe(
      response => {
        this._snackBar.open('Cliente Aceptado', null, {
          duration: 2000,
        });
        this.obtenerClientes()
      },
      error=> {
        this._snackBar.open('Error en el servidor', null, {
          duration: 2000,
        });

      }
    )
  }

  rechazar(id) {
    console.log('C', id)

    let data = {
      "id": id,
      "status": "rechazado"
    }
    this._service.changeStatus(data).subscribe(
      response => {
        this._snackBar.open('Cliente Rechazado', null, {
          duration: 2000,
        });

      },
      error=> {
        this._snackBar.open('Error en el servidor', null, {
          duration: 2000,
        });

      }
    )
    
  }
}
