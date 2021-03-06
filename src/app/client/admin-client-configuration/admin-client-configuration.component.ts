import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ServiceService } from '../../services/service.service';
import { MatSnackBar, MatDialog } from '@angular/material';
import { ConfirmationDialogComponent } from '../../shared/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-admin-client-configuration',
  templateUrl: './admin-client-configuration.component.html',
  styleUrls: ['./admin-client-configuration.component.css']
})
export class AdminClientConfigurationComponent implements OnInit {

  hide = true;
  mode = new FormControl('over');
  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
  
  isNatural = true;

  // natural
  apellidoPaterno: string;
  apellidoMaterno: string;
  nombres: string;
  departamento: string;
  provincia: string;
  distrito: string;
  direccion: string;
  sexo: string;
  tipoDocIdentidad: string;
  numDocumento: string;
  fechaNacimiento: string;
  telefono: string;
  profesion: string;
  centroLaboral: string;
  archivos: string;
  
  // juridical
  razonSocial: string;
  ruc: string;
  partidaRegistral: string;
  departamentoEmpresa: string;
  provinciaEmpresa: string;
  distritoEmpresa: string;
  direccionEmpresa: string;
  sedeRegistral: string;
  telefonoEmpresa: string;

  apellidoPaternoRepresentante: string;
  apellidoMaternoRepresentante: string;
  nombresRepresentante: string;
  departamentoRepresentante: string;
  provinciaRepresentante: string;
  distritoRepresentante: string;
  direccionRepresentante: string;
  sexoRepresentante: string;
  tipoDocIdentidadRepresentante: string;
  numDocumentoRepresentante: string;
  fechaNacimientoRepresentante: string;
  telefonoRepresentante: string;
  profesionRepresentante: string;
  centroLaboralRepresentante: string;

  isDisabled = true;

  constructor(
    public dialog: MatDialog,
    private _service: ServiceService,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit() {

    this.esPersonaNatural()

  }

  maximoTamanio(tipoDoc) {
    console.log('afs', typeof this.numDocumento)
    if(tipoDoc == 'dni') {
      if(this.numDocumento != undefined) {
        
        let doc = this.numDocumento.toString()
  
        if(doc.length > 8) {
          
          this.numDocumento = doc.substring(0, 8)
    
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

  editar() {
    this.isDisabled = false;
  }

  cancelar() {
    this.isDisabled = true;
  }

  esPersonaNatural() {

    this._service.getClient(localStorage.getItem('clientId')).subscribe(
      response => {
        console.log('response', response)
        if(response.data.typeClient == 'natural') {
          this.isNatural = true;
          this.obtenerDatosNatural();
        }else {
          this.isNatural = false;
        }

      },
      error => {
        console.log('error', error)
      }
    )

  }

  enviarSolicitud() {
    
    this.openDialog("Se envió la solicitud de actualización de cuenta");

  }

  obtenerDatosNatural() {
    console.log('asdfasdf', localStorage.getItem('clientDirectId'))
    this._service.getDataNatural(localStorage.getItem('clientDirectId')).subscribe(
      response => {
        console.log('response', response)
        this.nombres = response.data.client.user.nombres
        this.apellidoPaterno = response.data.client.user.nombres
        this.apellidoPaterno = response.data.client.user.nombres
        this.sexo = response.data.client.user.genero
        this.departamento = "lima"
        this.provincia = "lima"
        this.distrito = "lima"
        this.direccion = response.data.client.user.direccion
        this.tipoDocIdentidad = "01"
        this.numDocumento = response.data.client.user.numDocumento
        this.fechaNacimiento = "2019-12-28"
        this.telefono = response.data.client.user.telefono
        this.profesion = response.data.client.user.ocupacion
        this.centroLaboral = response.data.client.user.centroLaboral
      },
      error => {
        console.log('error', error)
        
        this.openDialog("Error en el servidor");

      }
    )

  }

  obtenerDatosJuridical() {

    this._service.getDataJuridical(localStorage.getItem('clientDirectId')).subscribe(
      response => {
        console.log('response', response)
        this.razonSocial = response.data.razonSocial
        this.ruc = response.data.razonSocial
        this.partidaRegistral = response.data.razonSocial
        this.sedeRegistral = "sede1"
        this.departamentoEmpresa = "lima"
        this.provinciaEmpresa = "lima"
        this.distritoEmpresa = "lima"
        this.direccionEmpresa = response.data.direccion
        this.telefonoEmpresa = response.data.telefono
        
        this.nombresRepresentante = response.data.client.user.nombres
        this.apellidoPaternoRepresentante = response.data.client.user.nombres
        this.apellidoPaternoRepresentante = response.data.client.user.nombres
        this.sexoRepresentante = response.data.client.user.genero
        this.departamentoRepresentante = "lima"
        this.provinciaRepresentante = "lima"
        this.distritoRepresentante = "lima"
        this.direccionRepresentante = response.data.client.user.direccion
        this.tipoDocIdentidadRepresentante = "01"
        this.fechaNacimientoRepresentante = "2019-12-28"
        this.telefonoRepresentante = response.data.client.user.telefono
        this.profesionRepresentante = response.data.client.user.ocupacion
        this.centroLaboralRepresentante = response.data.client.user.centroLaboral
      },
      error => {
        console.log('error', error)

        
        this.openDialog("Error en el servidor");

      }
    )
  }

  solicitarModificacionJuridical() {
    let data = {
      apellidoPaterno: this.apellidoPaternoRepresentante,
      apellidoMaterno: this.apellidoMaternoRepresentante,
      nombres: this.nombresRepresentante,
      departamento: this.departamentoRepresentante,
      provincia: this.provinciaRepresentante,
      distrito: this.direccionRepresentante,
      direccion: this.direccionRepresentante,
      tipoDocumento: this.tipoDocIdentidadRepresentante,
      numDocumento: this.numDocumentoRepresentante,
      fechaNacimiento: this.fechaNacimientoRepresentante,
      genero: this.sexoRepresentante,
      telefono: this.telefonoRepresentante,
      ocupacion: this.profesionRepresentante,
      centroLaboral: this.centroLaboralRepresentante,


      razonSocial: this.razonSocial,
      ruc: this.ruc,
      partidaRegistral: this.partidaRegistral,
      departamentoJuridical: this.departamentoEmpresa,
      provinciaJuridical: this.provinciaEmpresa,
      distritoJuridical: this.distritoEmpresa,
      direccionJuridical: this.direccionEmpresa,
      sede_registral: this.sedeRegistral,
      telefonoJuridical: this.telefonoEmpresa,
      client: localStorage.getItem('clientId')
    }

    this._service.updateMomentJuridical(data).subscribe(
      response => {
        if(response.status == true) {
          
          this.openDialog("Solicitud enviada");

          console.log('response', response)
          this.isDisabled = true;
        }else {
          
          this.openDialog("Error al enviar solicitud");

        }
      },
      error => {
        console.log('error', error)
        
        this.openDialog("Error en el servidor");

      }
    )
  }

  solicitarModificacionNatural() {
    let data = {
      apellidoPaterno: this.apellidoPaterno,
      apellidoMaterno: this.apellidoMaterno,
      nombres: this.nombres,
      departamento: this.departamento,
      provincia: this.provincia,
      distrito: this.distrito,
      direccion: this.direccion,
      tipoDocumento: this.tipoDocIdentidad,
      numDocumento: this.numDocumento,
      fechaNacimiento: this.fechaNacimiento,
      genero: this.sexo,
      telefono: this.telefono,
      profesion: this.profesion,
      centroLaboral: this.centroLaboral,
      client: localStorage.getItem('clientId')
    }

    this._service.updateMomentNatural(data).subscribe(
      response => {
        if(response.status == true) {
          
          this.openDialog("Solicitud enviada");

          console.log('response', response)
          this.isDisabled = true;

        } else {
          
          this.openDialog("Error al enviar solicitud");

        }

      },
      error => {
        console.log('error', error)
        
        this.openDialog("Error en el servidor");

      }
    )


  }

}
