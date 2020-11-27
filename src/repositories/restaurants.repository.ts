import {DefaultCrudRepository} from '@loopback/repository';
import {Restaurants, RestaurantsRelations} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class RestaurantsRepository extends DefaultCrudRepository<
  Restaurants,
  typeof Restaurants.prototype.id,
  RestaurantsRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Restaurants, dataSource);
  }
}
