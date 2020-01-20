import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ServiceService } from '../../services/service.service';
import { MatSnackBar, MatDialog, MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { ConfirmationDialogComponent } from '../../shared/confirmation-dialog/confirmation-dialog.component';
import { Router } from '@angular/router';
import { ConfirmationComponent } from 'src/app/shared/dialogs/confirmation/confirmation.component';



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
  
  displayedColumns2: string[] = ['ticket', 'solicitud', 'fecha_solicitud', 'fecha_Respuesta', 'resultado', 'nombre', 'ruc', 'accion'];
  
  dataSource2 = new MatTableDataSource(ELEMENT_DATA2);
  countNotifications: string;
  
  constructor(
    public dialog: MatDialog,
    private _service: ServiceService,
    private _snackBar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit() {
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
}
