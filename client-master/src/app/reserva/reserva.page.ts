import { Reserva } from './../Modelos/reserva';
import { ReservaService } from '../services/reserva.service';
import { FormControl, FormGroup } from '@angular/forms';

import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.page.html',
  styleUrls: ['./reserva.page.scss'],
})
export class ReservaPage implements OnInit {
  public form!: FormGroup;
  public reserva!: Reserva;
  constructor(
    public ReservaService: ReservaService
  ) { }

  ngOnInit() {

    this.form = new FormGroup({
      destino: new FormControl(''),
      salida: new FormControl(''),
      llegada: new FormControl(''),
      npersonas: new FormControl('')
     })
  }

  onSave(){

    let data ={
      destino: this.form.get('destino')?.value,
      salida: this.form.get('salida')?.value,
      llegada: this.form.get('llegada')?.value,
      npersonas: this.form.get('npersonas')?.value
    }
    this.reserva = new Reserva();
    this.reserva.setValues(data);
    this.ReservaService.create(this.reserva);
  }

}

