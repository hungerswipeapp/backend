import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {Friends, FriendsRelations, Profile} from '../models';
import {DbDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {ProfileRepository} from './profile.repository';

export class FriendsRepository extends DefaultCrudRepository<
  Friends,
  typeof Friends.prototype.id,
  FriendsRelations
> {

  public readonly profile: BelongsToAccessor<Profile, typeof Friends.prototype.id>;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource, @repository.getter('ProfileRepository') protected profileRepositoryGetter: Getter<ProfileRepository>,
  ) {
    super(Friends, dataSource);
    this.profile = this.createBelongsToAccessorFor('profile', profileRepositoryGetter,);
    this.registerInclusionResolver('profile', this.profile.inclusionResolver);
  }
}
