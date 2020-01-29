import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  usuario: any;
  token: string;

  usuarioAdmin: any;
  tokenAdmin: string;

  constructor(
    private http: HttpClient,
  ) { 
    this.cargarStorage()
  }

  estaLogueado() {
    console.log('lenght', this.token.length)
    return ( this.token.length > 5 ) ? true : false;
  }

  estaLogueadoAdmin() {
    return ( this.tokenAdmin.length > 5 ) ? true : false;
  }

  cargarStorage() {

    if ( localStorage.getItem('token')) {
    
      this.token = localStorage.getItem('token');
      this.usuario = JSON.parse( localStorage.getItem('currentUser') );
    
    } else {

      this.token = '';
      this.usuario = null;
    
    }

    if ( localStorage.getItem('tokenAdmin')) {
    
      this.tokenAdmin = localStorage.getItem('tokenAdmin');
      this.usuarioAdmin = JSON.parse( localStorage.getItem('currentUserAdmin') );
    
    } else {

      this.tokenAdmin = '';
      this.usuarioAdmin = null;
    
    }

  }

}
