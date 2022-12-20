import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoDataSource} from '../datasources';
import {Reserva, ReservaRelations} from '../models';

export class ReservaRepository extends DefaultCrudRepository<
  Reserva,
  typeof Reserva.prototype.id,
  ReservaRelations
> {
  constructor(
    @inject('datasources.mongodb') dataSource: MongoDataSource,
  ) {
    super(Reserva, dataSource);
  }
}
