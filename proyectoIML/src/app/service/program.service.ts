import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import {  Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProgramService {
  apiURL = 'http://localhost:3000/api/'

  constructor(private _http: HttpClient) { }

  //Programar servicio
  programarServicio(programParams): Observable<any>{
    
    let params = JSON.stringify(programParams);
    let options = new HttpHeaders().set('Content-type','application/json');

    return this._http.post(this.apiURL,params,{headers: options}).pipe((res)=>res);
  }
}
