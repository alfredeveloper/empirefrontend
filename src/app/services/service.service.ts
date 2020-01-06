import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(
    private http: HttpClient
  ) { }

  loginAdmin(data: Object): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/api/login/admin`, data);
  }

  login(data: Object): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/api/login`, data);
  }

  registerClient(data: Object): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/api/clients`, data);
  }

  updateClient(data: Object): Observable<any> {
    return this.http.put<any>(`${environment.apiUrl}/api/clients`, data);
  }

  getClients(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/api/clients`);
  }

  getClient(id): Observable<any> {
    return this.http.get(<any>(`${environment.apiUrl}/api/clients/${id}`))
  }
  sendCode(data: Object): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/api/send/code`, data);
  }

  updateStatusClient(data: Object): Observable<any> {
    return this.http.put<any>(`${environment.apiUrl}/api/clients/status`, data)
  }

  changePassword(data: Object): Observable<any>{
    return this.http.put<any>(`${environment.apiUrl}/api/change/password`, data)

  }

  changeStatus(data: Object): Observable<any>{
    return this.http.put<any>(`${environment.apiUrl}/api/clients/status`, data)

  }

  getNotifications(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/api/requests`);
  }

  isNaturalPerson(id): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/api/is/natural/person/${id}`);
  }

  updateMomentNatural(data): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/api/save/moment/natural`, data)
  }

  updateMomentJuridical(data): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/api/save/moment/juridical`, data)
  }

  getDataNatural(id): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/api/get/data/natural/${id}`)
  }

  getDataJuridical(id): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/api/get/data/juridical/${id}`)
  }
  
  changeStatusRequest(data: Object): Observable<any>{
    return this.http.put<any>(`${environment.apiUrl}/api/requests`, data)

  }

  changePasswordAdmin(data: Object): Observable<any>{
    return this.http.put<any>(`${environment.apiUrl}/api/change/password/admin`, data)

  }

  changePasswordFromLink(data: Object): Observable<any>{
    return this.http.put<any>(`${environment.apiUrl}/api/change/password/link`, data)

  }
  
  requestChangePassword(data: Object): Observable<any>{
    return this.http.post<any>(`${environment.apiUrl}/api/request/change/password`, data)

  }
  
}
