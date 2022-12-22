import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Reserva } from '../Modelos/reserva';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {
  public urlServer = environment.url + '/reservas';
  constructor(public http: HttpClient) { }

  create(data: Reserva){

    return this.http.post<Reserva>(this.urlServer, data).subscribe(rest =>console.log(rest));
  }

}
