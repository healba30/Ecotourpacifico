import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Registro } from '../Modelos/registro';

@Injectable({
  providedIn: 'any'
})
export class RegistroService {
  public urlServer = environment.url + '/registros';
  constructor(public http: HttpClient) { }
  create(data: Registro){

    return this.http.post<Registro>(this.urlServer, data).subscribe(rest =>console.log(rest));

  }
}
