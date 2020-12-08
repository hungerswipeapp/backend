import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {Profile, ProfileRelations, Friends} from '../models';
import {DbDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {FriendsRepository} from './friends.repository';

export class ProfileRepository extends DefaultCrudRepository<
  Profile,
  typeof Profile.prototype.id,
  ProfileRelations
> {

  public readonly friends: HasManyRepositoryFactory<Friends, typeof Profile.prototype.id>;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource, @repository.getter('FriendsRepository') protected friendsRepositoryGetter: Getter<FriendsRepository>,
  ) {
    super(Profile, dataSource);
    this.friends = this.createHasManyRepositoryFactoryFor('friends', friendsRepositoryGetter,);
    this.registerInclusionResolver('friends', this.friends.inclusionResolver);
  }
}
