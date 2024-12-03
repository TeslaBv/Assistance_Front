import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private apiTutors = environment.api+'/api/v1/tutores';
  private apiUrl = environment.api+'/api/v1/';
  private apiStudents = environment.api+'/api/v1/estudiantes';
  constructor(private _http: HttpClient) { }

  addTutor(tutor: any) {
    // Obtener el token de sessionStorage
    const token = sessionStorage.getItem('token');

    // Configurar los headers con el token
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    // Realizar la solicitud POST
    return this._http.post(this.apiTutors, tutor, { headers });
  }

  getTutors() {
    // Obtener el token de sessionStorage
    const token = sessionStorage.getItem('token');

    // Configurar los headers con el token
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    // Realizar la solicitud POST
    return this._http.get(this.apiTutors, { headers });
  }

  addStudent(formData: FormData) {
    // Obtener el token del sessionStorage
    const token = sessionStorage.getItem('token');
  
    // Configurar los headers con el token
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
  
    // Realizar la solicitud POST
    return this._http.post(this.apiStudents, formData, { headers });
  }

  getStudentsFromTutor(id: any) {
    // Obtener el token de sessionStorage
    const token = sessionStorage.getItem('token');

    // Configurar los headers con el token
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    // Realizar la solicitud POST
    return this._http.get(this.apiStudents + '/tutor/' + id, { headers });
  }




}
