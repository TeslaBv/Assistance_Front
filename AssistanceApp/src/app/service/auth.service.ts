import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private _http : HttpClient) { }

  loginAdmin(user : any){
    return this._http.post('https://bakendchecador.onrender.com/api/v1/auth/login',user);
  }
  loginTutor(user : any){
    return this._http.post('https://bakendchecador.onrender.com/api/v1/auth/login',user);
  }
}
