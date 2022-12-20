import { RegistroService } from './../services/registro.service';
import { Registro } from './../Modelos/registro';
import { FormControl, FormGroup } from '@angular/forms';

import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  public form!: FormGroup;
  public registro!: Registro;
  constructor(
    public RegistroService: RegistroService
  ) { }

  ngOnInit() {
   this.form = new FormGroup({
    nombre: new FormControl(''),
    apellido: new FormControl(''),
    email: new FormControl(''),
    telefono: new FormControl(''),
    password: new FormControl('')
   })
  }

  onSave(){

    let data ={
      nombre: this.form.get('nombre')?.value,
      apellido: this.form.get('apellido')?.value,
      email: this.form.get('email')?.value,
      telefono: this.form.get('telefono')?.value,
      password: this.form.get('password')?.value
    }
    this.registro = new Registro();
    this.registro.setValues(data);
    this.RegistroService.create(this.registro);
  }

}
