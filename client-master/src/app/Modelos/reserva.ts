export class Reserva {
  public destino;
  public salida;
  public llegada;
  public npersonas;
  setValues(data){
      this.destino = data.destino;
      this.salida = data.salida;
      this.llegada = data.llegada;
      this.npersonas = data.npersonas;
}
}
