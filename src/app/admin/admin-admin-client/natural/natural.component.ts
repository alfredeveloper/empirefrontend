import { Component, OnInit, ViewChild } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { MatTableDataSource, MatSort, MatPaginator, MatDialog } from '@angular/material';
import { ServiceService } from 'src/app/services/service.service';
import { ConfirmationComponent } from 'src/app/shared/dialogs/confirmation/confirmation.component';

export interface PeriodicElement {
  Nombres: string;
  Apellidos: string;
  DNI: string;
  Correo: string;
  Estado: string;
  Accion: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  
];

@Component({
  selector: 'app-natural',
  templateUrl: './natural.component.html',
  styleUrls: ['./natural.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class NaturalComponent implements OnInit {

  dataSource = new MatTableDataSource(ELEMENT_DATA);
  columnsToDisplay = ['Nombres', 'Apellidos', 'DNI', 'Correo', 'Estado', 'Accion'];
  expandedElement: PeriodicElement | null;

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  
  constructor(
    private _service: ServiceService,
    public dialog: MatDialog,
  ) { }

  ngOnInit() {

    this.obtenerClientes()

  }

  buscarPersonaNatural(filterValue: string) {

    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
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
        
        this.dataSource = new MatTableDataSource(naturalArray);

        this.dataSource.data = naturalArray;
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
