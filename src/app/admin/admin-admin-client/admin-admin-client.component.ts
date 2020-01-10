import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSnackBar, MatDialog, MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { ServiceService } from '../../services/service.service';
import { trigger, state, transition, style, animate } from '@angular/animations';
import { Router } from '@angular/router';
import { ConfirmationDialogComponent } from '../../shared/confirmation-dialog/confirmation-dialog.component';

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

  dataSource1 = new MatTableDataSource(ELEMENT_DATA1);
  columnsToDisplay1 = ['Razon_Social', 'Nombre_Comercial', 'RUC', 'Correo', 'Estado', 'Accion'];
  expandedElement1: PeriodicElement1 | null;

  dataSource2 = new MatTableDataSource(ELEMENT_DATA2);
  columnsToDisplay2 = ['Nombres', 'Apellidos', 'DNI', 'Correo', 'Estado', 'Accion'];
  expandedElement2: PeriodicElement2 | null;

  apellidoPaterno: string;
  apellidoMaterno: string;
  nombres: string;
  correoElectronicoPersona: string;
  dni: string;

  razonSocial: string;
  nombreComercial: string;
  ruc: string;
  correoElectronicoEmpresa: string;
  

  hide = true;
  mode = new FormControl('over');
  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
  
  animal: string;
  name: string;
  
  @ViewChild(MatSort, {static: true}) sort1: MatSort;
  @ViewChild(MatSort, {static: true}) sort2: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator1: MatPaginator;
  @ViewChild(MatPaginator, {static: true}) paginator2: MatPaginator;

  constructor(
    public dialog: MatDialog,
    private _snackBar: MatSnackBar,
    private _service: ServiceService,
    private router: Router
  ) { }

  ngOnInit() {
    this.obtenerClientes()

    
  }

  buscarPersonaNatural(filterValue: string) {
    this.dataSource2.filter = filterValue.trim().toLowerCase();

    if (this.dataSource2.paginator) {
      this.dataSource2.paginator.firstPage();
    }
  }

  buscarPersonaJuridica(filterValue: string) {
    this.dataSource1.filter = filterValue.trim().toLowerCase();

    if (this.dataSource1.paginator) {
      this.dataSource1.paginator.firstPage();
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

  registrarNatural(sidenavAddClient) {

    if(this.apellidoPaterno == "" || this.apellidoPaterno == null || this.apellidoPaterno == undefined ||
    this.apellidoMaterno == "" || this.apellidoMaterno == null ||this.apellidoMaterno == undefined ||
    this.nombres == "" || this.nombres == null || this.nombres == undefined ||
    this.correoElectronicoPersona == "" || this.correoElectronicoPersona == null || this.correoElectronicoPersona == undefined
    ) {

      this.openDialog("Ingrese todos los campos");

    } else {
      let body = {
        apellidoPaterno: this.apellidoPaterno,
        apellidoMaterno: this.apellidoMaterno,
        nombres: this.nombres,
        correo: this.correoElectronicoPersona,
        numDocumento: this.dni,
        tipoCliente: "natural"
      }

      this._service.registerClient(body).subscribe(
        response => {
          console.log('response', response)
          alert('Tu código de verificacion es: ' + response.data.client.code)
          sidenavAddClient.close()
          this.obtenerClientes()
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

      
      this.openDialog("Ingrese todos los campos");

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
          this.obtenerClientes()
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
            status: element.client.user.status,
            departamento: element.client.user.departamento,
            provincia: element.client.user.provincia,
            distrito: element.client.user.distrito,
            direccion: element.client.user.direccion,
            genero: element.client.user.genero,
            fechaNacimiento: element.client.user.fechaNacimiento,
            telefono: element.client.user.telefono,
            centroLaboral: element.client.user.centroLaboral,
            ocupacion: element.client.user.ocupacion,

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
            status: element.client.user.status,
            departamento: element.departamento,
            provincia: element.provincia,
            distrito: element.distrito,
            direccion: element.direccion,
            nombresRepresentante: element.client.user.nombres,
            ApellidosRepresentante: element.client.user.apellidoPaterno + ' ' + element.client.user.apellidoMaterno,
            direccionRepresentante: element.client.user.direccion,
            departamentoRepresentante: element.client.user.departamento,
            distritoRepresentante: element.client.user.distrito,
            telefonoRepresentante: element.client.user.telefono,
            generoRepresentante: element.client.user.genero,
            numdocRepresentante: element.client.user.numDocumento,
            fechaNacimientoRepresentante: element.client.user.fechaNacimiento,
            correoRepresentante: element.client.user.correo,
            ocupacionRepresentante: element.client.user.ocupacion,
            centroLaboralRepresentante: element.client.user.centroLaboral,
          }

          juridicalArray.push(j)
        });

        this.dataSource1 = new MatTableDataSource(juridicalArray);
        this.dataSource2 = new MatTableDataSource(naturalArray);

        console.log('data1', juridicalArray)
        console.log('data2', naturalArray)
        this.dataSource1.paginator = this.paginator1;
        this.dataSource2.paginator = this.paginator2;
        this.dataSource1.sort = this.sort1;
        this.dataSource2.sort = this.sort2;
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
        
        this.openDialog("Cliente Aceptado");
        this.obtenerClientes()
      },
      error=> {
        
        this.openDialog("Error en el servidor");

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
        
        this.openDialog("Cliente Rechazado");

      },
      error=> {
        
        this.openDialog("Error en el servidor");

      }
    )
    
  }

  cerrarSesion() {
    this.router.navigate(["/admin"])
  }

  irANuevoCliente() {

    this.router.navigate(['/admin-administrador-cliente'])

  }

  irANuevoCambioDeDatos() {

    this.router.navigate(['/admin-administrador-chat'])

  }
  
}
