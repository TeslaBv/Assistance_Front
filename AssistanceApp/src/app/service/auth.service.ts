import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private _http : HttpClient) { }

  loginAdmin(user : any){
    return this._http.post(environment.api+'/api/v1/auth/login',user);
  }
  loginTutor(user : any){
    return this._http.post(environment.api+'/api/v1/auth/login-tutores',user);
  }
}
