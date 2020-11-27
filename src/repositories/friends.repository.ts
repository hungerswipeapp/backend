import {DefaultCrudRepository} from '@loopback/repository';
import {Friends, FriendsRelations} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class FriendsRepository extends DefaultCrudRepository<
  Friends,
  typeof Friends.prototype.FriendsId,
  FriendsRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Friends, dataSource);
  }
}
