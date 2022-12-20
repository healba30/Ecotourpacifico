export class Login {
  public nombre;
  public apellido;
  public email;
  public telefono;
  public password;
  setValues(data){
      this.nombre = data.nombre;
      this.apellido = data.apellido;
      this.email = data.email;
      this.telefono = data.telefono;
      this.password = data.password;
  }
}
