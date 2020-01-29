import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSnackBar, MatDialog, MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { ServiceService } from '../../services/service.service';
import { Router } from '@angular/router';
import { ConfirmationDialogComponent } from '../../shared/confirmation-dialog/confirmation-dialog.component';
import { ConfirmationComponent } from 'src/app/shared/dialogs/confirmation/confirmation.component';





@Component({
  selector: 'app-admin-admin-client',
  templateUrl: './admin-admin-client.component.html',
  styleUrls: ['./admin-admin-client.component.css']
})

export class AdminAdminClientComponent implements OnInit {

  
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

  constructor(
    public dialog: MatDialog,
    private _snackBar: MatSnackBar,
    private _service: ServiceService,
    private router: Router
  ) { }

  ngOnInit() {
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
    this.correoElectronicoPersona == "" || this.correoElectronicoPersona == null || this.correoElectronicoPersona == undefined ||
    this.dni == "" || this.dni == null || this.dni == undefined
    ) {

      this.openDialog("Ingrese todos los campos");

    } else {
      let body = {
        apellidoPaterno: this.apellidoPaterno,
        apellidoMaterno: this.apellidoMaterno,
        nombres: this.nombres,
        correo: this.correoElectronicoPersona,
        numDocumento: this.dni.toString(),
        tipoCliente: "natural"
      }


      this._service.registerClient(body).subscribe(
        response => {
          console.log('response', response)
          alert('Tu código de verificacion es: ' + response.data.client.code)
          sidenavAddClient.close()
          // this.obtenerClientes()
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
          // this.obtenerClientes()
        },
        error => {
          console.log('error', error)

        }
      )
    }
  }


  maximoTamanio(tipoDoc) {
    console.log('afs', typeof this.dni)
    if(tipoDoc == 'dni') {
      if(this.dni != undefined) {
        
        let doc = this.dni.toString()
  
        if(doc.length > 8) {
          
          this.dni = doc.substring(0, 8)
    
        }
      }

    }

    else if(tipoDoc == 'ruc') {
      if(this.ruc != undefined) {
        
        let doc = this.ruc.toString()
  
        if(doc.length > 11) {
          
          this.ruc = doc.substring(0, 11)
    
        }
      }
    }
  }
  
}
