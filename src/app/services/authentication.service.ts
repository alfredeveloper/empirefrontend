import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { User } from '../models/user';

import { map } from 'rxjs/operators';
import { ChatService } from '../pages/services/chat.service';

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
  ) { }

  public getToken(): string {
    return localStorage.getItem('token');
  }

  login(user: User): Observable<any> {
    const data_user = {
      email: user.correo, 
      password: user.contrasenia,
      mobile_token: 'seraesra'
    };
    console.log(data_user);
    return this.http.post<any>(`${environment.apiUrl}/api/login/`, data_user)
    .pipe(map(data => {
      console.log(data);
      if (data && data.token) {
        localStorage.setItem('currentUser', JSON.stringify(data.data.user));
        localStorage.setItem('token', data.token);
        localStorage.setItem('auth', 'true'); // Change for verify token
        localStorage.setItem('map', 'true');
        localStorage.setItem('manager_id', data.data.manager._id)
        // this.getGroups(data.user.id);
        // this.currentUserSubject.next(data);
        // this.userAuthenticated = true;
        return data;
      }
      this.dataSocket.userId = data.data.user._id;
      this.dataSocket.name = data.data.user.name;
      this.dataSocket.lastname = data.data.user.lastnamepat;
      console.log('enter room');
      // this.chatService.enterTo(this.dataSocket, false);
      return data;
    })
    );
  }
  logout() {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('token');
    localStorage.removeItem('map');
    localStorage.removeItem('auth');
    localStorage.removeItem('manager_id');
    // this.chatService.disconnect();
    // this.userAuthenticated = false;
    // this.currentUserSubject.next(null);
  }
}
