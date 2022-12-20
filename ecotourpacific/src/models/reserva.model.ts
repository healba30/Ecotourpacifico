import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Reserva extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  destino: string;

  @property({
    type: 'date',
    required: true,
  })
  salida: string;

  @property({
    type: 'date',
    required: true,
  })
  llegada: string;

  @property({
    type: 'number',
    required: true,
  })
  npersonas: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Reserva>) {
    super(data);
  }
}

export interface ReservaRelations {
  // describe navigational properties here
}

export type ReservaWithRelations = Reserva & ReservaRelations;
