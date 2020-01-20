import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatDialog, MatTableDataSource } from '@angular/material';
import { ServiceService } from 'src/app/services/service.service';
import { ConfirmationComponent } from 'src/app/shared/dialogs/confirmation/confirmation.component';

export interface PeriodicElement {
  ticket: string;
  solicitud: string;
  fecha_solicitud: string;
  fecha_Respuesta: string;
  resultado: string;
  nombre: string;
  ruc: string;
  accion: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  
];

@Component({
  selector: 'app-rejecteds',
  templateUrl: './rejecteds.component.html',
  styleUrls: ['./rejecteds.component.css']
})
export class RejectedsComponent implements OnInit {

  displayedColumns: string[] = ['ticket', 'solicitud', 'fecha_solicitud', 'fecha_Respuesta', 'resultado', 'nombre', 'ruc', 'accion'];
  
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  countNotifications: string;
  
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  
  constructor(
    public dialog: MatDialog,
    private _service: ServiceService,
  ) { }

  ngOnInit() {
    this.obtenerNotificaciones()
  }

  buscarRechazados(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  aprobar(id) {

    const dialogRef = this.dialog.open(ConfirmationComponent, {
      width: '350px',
      data: "¿Estas seguro de aceptar la solicitud?"
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result=='true') {
        console.log('result', result)

        console.log('type', typeof result)
        
        let data = {
          requestId: id,
          resultado: "aprobado"
        }
        this._service.changeStatusRequest(data).subscribe(
          response => {
            console.log('response', response)
                
            this.obtenerNotificaciones()
          },
          error => {
            console.log('error', error)
            
            // this.openDialog("Error en el servidor");
          }
        )
        
        
      }else{

      }
    });

  }

  denegar(id) {

    const dialogRef = this.dialog.open(ConfirmationComponent, {
      width: '350px',
      data: "¿Estas seguro de rechazar la solicitud?"
    });

    dialogRef.afterClosed().subscribe(result => {

      if (result=='true') {
        console.log('result', result)
        
        let data = {
          requestId: id,
          resultado: "rechazado"
        }
        this._service.changeStatusRequest(data).subscribe(
          response => {
            console.log('response', response)
            
            // this.openDialog("Solicitud Rechazada");
            this.obtenerNotificaciones()
          },
          error => {
            console.log('error', error)
           
            // this.openDialog("Error en el servidor");
          }
        )
        
      } else {

      }

    });

  }

  obtenerNotificaciones() {

    this._service.getNotifications().subscribe(
      response => {
        console.log('response', response)
        let rechazadosArray = []
        response.data.rechazados.forEach(element => {
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

          rechazadosArray.push(n)
        });

        this.dataSource = new MatTableDataSource(rechazadosArray)

        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error => {
        console.log('error', error)

      }
    )

  }

}
