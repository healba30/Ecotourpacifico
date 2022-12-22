export class Registro {
  filter(arg0: (registo: any) => boolean) {
    throw new Error('Method not implemented.');
  }
  public id;
  public nombre;
  public apellido;
  public email;
  public telefono;
  public password;
  setValues(data){
      this.id = data.id;
      this.nombre = data.nombre;
      this.apellido = data.apellido;
      this.email = data.email;
      this.telefono = data.telefono;
      this.password = data.password;
  }
}
