import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TutorService {
  private apiStudents = 'https://bakendchecador.onrender.com/api/v1/estudiantes';

  constructor( private _http : HttpClient) { }

  
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
