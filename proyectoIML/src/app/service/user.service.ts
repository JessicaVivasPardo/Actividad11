import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiURL = 'http://localhost:5000/api/'
  

  constructor(private _http: HttpClient) { }

  //Realizar cotización
  registrarCotizacion(clientParams): Observable<any>{

    let params = JSON.stringify(clientParams);
    let options = new HttpHeaders().set('Content-type','application/json');

    return this._http.post(this.apiURL,params,{headers: options}).pipe((res)=>res);

  }


}
