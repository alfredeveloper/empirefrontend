import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { User } from '../models/user';

import { map } from 'rxjs/operators';
import { ChatService } from '../client/services/chat.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  dataSocket = {
    userId: 0,
    name: '',
    lastname: '',
    room: 'chat-one-to-one-room',
    typeUser: 'admin'
  };

  constructor(
    private http: HttpClient,
    private chatService: ChatService,
    private router: Router
  ) { }

  public getToken(): string {
    return localStorage.getItem('token');
  }

  login(data): Observable<any> {
    
    return this.http.post<any>(`${environment.apiUrl}/api/login`, data)
    .pipe(map(response => {
      
      if (response.status) {
        localStorage.setItem('currentUser', JSON.stringify(response.data));
        localStorage.setItem('token', response.token);
        localStorage.setItem('auth', 'true'); // Change for verify token
        localStorage.setItem('map', 'true');
        localStorage.setItem('clientId', response.clientId)
        localStorage.setItem('clientDirectId', response.clientDirectId)
        return response;
      }
      console.log('enter room');
      return response;
    })
    );
  }

  logout() {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('token');
    localStorage.removeItem('map');
    localStorage.removeItem('auth');
    localStorage.removeItem('clientId');
    localStorage.removeItem('clientDirectId');
    this.router.navigate(['/iniciar-sesion'])

  }

  loginAdmin(data): Observable<any> {
    
    return this.http.post<any>(`${environment.apiUrl}/api/login/admin`, data)
    .pipe(map(response => {
      
      if (response.status) {
        localStorage.setItem('currentUserAdmin', JSON.stringify(response.data));
        localStorage.setItem('tokenAdmin', response.token);
        localStorage.setItem('authAdmin', 'true'); // Change for verify token
        localStorage.setItem('mapAdmin', 'true');
        localStorage.setItem('clientId', response.clientId)
        localStorage.setItem('clientDirectId', response.clientDirectId)
        return response;
      }
      console.log('enter room');
      return response;
    })
    );
  }

  logoutAdmin() {
    localStorage.removeItem('currentUserAdmin');
    localStorage.removeItem('tokenAdmin');
    localStorage.removeItem('mapAdmin');
    localStorage.removeItem('authAdmin');
    localStorage.removeItem('clientId');
    localStorage.removeItem('clientDirectId');

    this.router.navigate(['/admin'])

  }
}
