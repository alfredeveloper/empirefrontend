import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ServiceService } from '../services/service.service';
import { MatSnackBar } from '@angular/material';

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

  constructor(
    private _service: ServiceService,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit() {


  }

  esPersonaNatural() {

    this._service.isNaturalPerson(2).subscribe(
      response => {
        console.log('response', response)

      },
      error => {
        console.log('error', error)
      }
    )

  }

  enviarSolicitud() {
    this._snackBar.open('Se envio la solicitud de actualización de cuenta', null, {
      duration: 2000,
    });
  }

  obtenerDatosNatural() {

    this._service.getDataNatural(localStorage.getItem('userId')).subscribe(
      response => {
        console.log('response', response)
      },
      error => {
        console.log('error', error)
        this._snackBar.open('Error en el servidor', null, {
          duration: 2000,
        });
      }
    )

  }

  obtenerDatosJuridical() {

    this._service.getDataJuridical(localStorage.getItem('userId')).subscribe(
      response => {
        console.log('response', response)
      },
      error => {
        console.log('error', error)

        this._snackBar.open('Error en el servidor', null, {
          duration: 2000,
        });
      }
    )
  }

  solicitarModificacionJuridica() {
    let data = {
      razonSocial: "string",
      ruc: "string",
      partidaRegistral: "string",
      departamentoEmpresa: "string",      
      provinciaEmpresa: "string",
      distritoEmpresa: "distritos",
      direccionEmpresa: "direccion",
      sedeRegistral: "sede",
      telefonoEmpresa: "telefono",

      apellidoPaternoRepresentante: "apellidoPaterno",
      apellidoMaternoRepresentante: "string",
      nombresRepresentante: "string",
      departamentoRepresentante: "string",
      provinciaRepresentante: "string",
      distritoRepresentante: "string",
      direccionRepresentante: "string",
      sexoRepresentante: "string",
      tipoDocIdentidadRepresentante: "string",
      numDocumentoRepresentante: "string",
      fechaNacimientoRepresentante: "string",
      telefonoRepresentante: "string",
      profesionRepresentante: "string",
      centroLaboralRepresentante: "string",
    }

    this._service.updateMomentNatural(data).subscribe(
      response => {
        console.log('response', response)
      },
      error => {
        console.log('error', error)
        this._snackBar.open('Error en el servidor', null, {
          duration: 2000,
        });
      }
    )
  }

  solicitarModificacionNatural() {
    let data = {
      apellidoPaterno: "string",
      apellidoMaterno: "stringify",
      nombres: "string",
      departamento: "string",
      provincia: "string",
      distrito: "string",
      direccion: "string",
      sexo: "string",
      tipoDocIdentidad: "string",
      numDocumento: "string",
      fechaNacimiento: "string",
      telefono: "string",
      profesion: "string",
      centroLaboral: "string",

    }

    this._service.updateMomentJuridical(data).subscribe(
      response => {
        console.log('response', response)
      },
      error => {
        console.log('error', error)
        this._snackBar.open('Error en el servidor', null, {
          duration: 2000,
        });
      }
    )


  }

}
