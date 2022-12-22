import { Registro } from './../Modelos/registro';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';

import { catchError, identity, map, Observable, of, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RegistroService {
  public registrosPorAdmin: Registro[] = [];
  public registrosPorAdmin$ = new Subject<Registro[]>();

  public allRegistros: Registro [] = [];
  public allRegistros$ = new Subject<Registro[]>();

  public registro!: Registro;

  public urlServer = environment.url + '/registros';
  constructor(public http: HttpClient) { }


  create(data: Registro){

    return this.http.post<Registro>(this.urlServer, data).subscribe(rest =>console.log(rest));

  }

  getAll$(): Observable<Registro []>{
    return this.allRegistros$.asObservable();

  }
  setAll(registros: Registro[]){
    this.allRegistros$.next(registros);
  }

  update(data: Registro): Observable <any>{
    return this.http.put(`${this.urlServer}${data.id}`,data)
    .pipe(
      map((res)=> res),
      catchError((error)=> of(error))
    );
  }

    getAll(): Observable <any> {
      this.allRegistros = [];
      return this.http.get<Registro []>(this.urlServer)
      .pipe(
        map((res: any[])=> {
          res.forEach((item: any) => {
            this.registro = new Registro();
            this.registro.setValues(item);
            this.allRegistros.push(this.registro);
          });
          this.allRegistros$.next(this.allRegistros);
        })
      );
    }

    // eliminar(id: string): Observable <any>{
    //   console.log(this.allRegistros);
    //   return this.http.delete<Registro []>(this.urlServer)
    //   .pipe(
    //     map((res: any)=> {
    //       console.log(res);
    //       // this.todosHoteles$.next(this.);
    //     })
    //   );
    // }


  //   registroPorAdmin$(): Observable <any>{
  //    return this.registrosPorAdmin$.asObservable();

  //   }

  //   setregistroPorAdmin(registros: Registro[]){
  //     this.registrosPorAdmin$.next(registros);
  //   }





  //   registroPorAdmin(idAdmin: string): Observable <any> {
  //     this.registrosPorAdmin = [];
  //     return this.http.get<Registro>(`${this.urlServer}${idAdmin}`)
  //     .pipe(
  //       map ( (res: any)=> {
  //         res.forEach((item: any) => {
  //           this.registro = new Registro();
  //           this.registro.setValues(item);
  //           this.registrosPorAdmin.push(this.registro);
  //         });
  //         this.registrosPorAdmin$.next(this.registrosPorAdmin);
  //       })
  //     );
  //   }
}
