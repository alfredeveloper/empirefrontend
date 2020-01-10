import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  usuario: any;
  token: string;

  constructor(
    private http: HttpClient,
  ) { 
    this.cargarStorage()
  }

  estaLogueado() {
    return ( this.token.length > 5 ) ? true : false;
  }

  cargarStorage() {

    if ( localStorage.getItem('token')) {
      this.token = localStorage.getItem('token');
      this.usuario = JSON.parse( localStorage.getItem('currentUser') );
    } else {
      this.token = '';
      this.usuario = null;
    }

  }

  getUsers(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/api/usersrole/?role=manager`);
  }

  getUsersDriver(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/api/drivers/`);
  }

  getInactiveDrivers(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/api/drivers-state/?active=false`)
   
  }

  getActiveDrivers(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/api/drivers/state/?active=true`)
    /* .pipe(map(_data => {
      for (let x = 0; x < _data.data.length; x++) {
        if (!_data.data[x].driver.isDriver) {
          _data.data.splice(x, 1);
        }
      }
      return _data;
    })); */
  }

  getLogedDrivers(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/api/drivers-logged/`)
    .pipe(map(_data => {
      /* for (let x = 0; x < _data.data.length; x++) {
        if (_data.data[x].driver.isDriver) {
          _data.data.splice(x, 1);
        }
      } */
      return _data;
    }));
  }

  getUsersLocation(): Observable<any> {

    const params = new HttpParams().set('active', 'true');
    return this.http.get<any>(`${environment.apiUrl}/api/drivers/state/`, {params: params});
  
  }

  activateUser(id): Observable<any> {
    console.log('url', `${environment.apiUrl}/api/drivers/activation`)

    const data = {
      driverId: id, state: true
    };

    return this.http.put<any>(`${environment.apiUrl}/api/drivers/activation`, data);
  
  }

  deactivateUser(id): Observable<any> {

    const data = {
      driverId: id, state: false
    };
    return this.http.put<any>(`${environment.apiUrl}/api/drivers/activation`, data);
  
  }

  getManager(id) {

    return this.http.get<any>(`${environment.apiUrl}/api/managers/${id}`);
  
  }

  updateManager(data) {
  
    return this.http.put<any>(`${environment.apiUrl}/api/managers`, data);
  
  }

  registerManager(data) {
   
    return this.http.post<any>(`${environment.apiUrl}/api/managers`, data);

  }

  getManagers() {

    return this.http.get<any>(`${environment.apiUrl}/api/usersrole/?role=manager`)

  }

  getUser(id) {

    return this.http.get<any>(`${environment.apiUrl}/api/managers/${id}`)

  }

}
