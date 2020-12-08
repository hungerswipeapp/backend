import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Friends,
  Profile,
} from '../models';
import {FriendsRepository} from '../repositories';

export class FriendsProfileController {
  constructor(
    @repository(FriendsRepository)
    public friendsRepository: FriendsRepository,
  ) { }

  @get('/friends/{id}/profile', {
    responses: {
      '200': {
        description: 'Profile belonging to Friends',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Profile)},
          },
        },
      },
    },
  })
  async getProfile(
    @param.path.number('id') id: typeof Friends.prototype.id,
  ): Promise<Profile> {
    return this.friendsRepository.profile(id);
  }
}
