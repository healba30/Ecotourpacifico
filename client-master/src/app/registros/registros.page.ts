import { Registro } from './../Modelos/registro';
import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { RegistroService } from '../services/registro.service';


@Component({
  selector: 'app-registros',
  templateUrl: './registros.page.html',
  styleUrls: ['./registros.page.scss'],
})
export class RegistrosPage implements OnInit {
  public registroU = new Registro();
  private id!: string;
  public listaRegistros: Registro [] = [];
  constructor( private registroServicios: RegistroService) { }

  ngOnInit() {
    this.registroServicios.getAll$().subscribe((res)=>{
      this.listaRegistros = res;
    })


    this.registroServicios.getAll().subscribe((res)=>{
      console.log('cargando.....');
    });

  }

  onUpdate(){
    console.log('update');
    console.log( this.id);
    this.registroServicios.update(this.registroU).subscribe(res => console.log(res));

  }

  /* eliminarReg(id: string){
    this.registroServicios.eliminar(id).subscribe(res => {
      const nuevoRegistro = this.registroU.filter(registo => registo.id !== id);
     //this.registroServicios.setregistroPorAdmin(nuevoRegistro);
    });
   } */


}
