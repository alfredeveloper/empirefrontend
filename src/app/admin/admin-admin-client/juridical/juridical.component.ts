import { Component, OnInit, ViewChild } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { MatTableDataSource, MatSort, MatPaginator, MatDialog } from '@angular/material';
import { ServiceService } from 'src/app/services/service.service';
import { ConfirmationComponent } from 'src/app/shared/dialogs/confirmation/confirmation.component';

export interface PeriodicElement {
  Razon_Social: string;
  Nombre_Comercial: string;
  RUC: string;
  Correo: string;
  Estado: string;
  Accion: string;
}

const ELEMENT_DATA1: PeriodicElement[] = [
  
];

@Component({
  selector: 'app-juridical',
  templateUrl: './juridical.component.html',
  styleUrls: ['./juridical.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class JuridicalComponent implements OnInit {

  dataSource = new MatTableDataSource(ELEMENT_DATA1);
  columnsToDisplay = ['Razon_Social', 'Nombre_Comercial', 'RUC', 'Correo', 'Estado', 'Accion'];
  expandedElement: PeriodicElement | null;
  
  

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  
  constructor(
    private _service: ServiceService,
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.obtenerClientes();
  }

  buscarPersonaJuridica(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  obtenerClientes() {
    this._service.getClients().subscribe(
      response => {
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

        this.dataSource = new MatTableDataSource(juridicalArray);

        console.log('data1', juridicalArray)

        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error => {
        console.log('error', error)
      }
    )
  }

  aceptar(id) {

    const dialogRef = this.dialog.open(ConfirmationComponent, {
      width: '350px',
      data: "¿Estas seguro de aceptar al cliente?"
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result=='true') {
        console.log('Yes clicked');
        console.log('result', result)
        
        let data = {
          "id": id,
          "status": "aceptado"
        }
        this._service.changeStatus(data).subscribe(
          response => {
            
            // this.openDialog("Cliente Aceptado");
            this.obtenerClientes()
    
          },
          error=> {
            
            // this.openDialog("Error en el servidor");
    
          }
        )
        
      }else{

      }
    });

  }

  rechazar(id) {
    console.log('C', id)

    const dialogRef = this.dialog.open(ConfirmationComponent, {
      width: '350px',
      data: "¿Estas seguro de rechazar al cliente?"
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result=='true') {
        console.log('Yes clicked');
        console.log('result', result)
        
        let data = {
          "id": id,
          "status": "rechazado"
        }
        this._service.changeStatus(data).subscribe(
          response => {
            
            // this.openDialog("Cliente Rechazado");
            this.obtenerClientes()
    
          },
          error=> {
            
            // this.openDialog("Error en el servidor");
    
          }
        )
        
      }else{

      }
    });

    
  }

}
