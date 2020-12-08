import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  Profile,
  Friends,
} from '../models';
import {ProfileRepository} from '../repositories';

export class ProfileFriendsController {
  constructor(
    @repository(ProfileRepository) protected profileRepository: ProfileRepository,
  ) { }

  @get('/profiles/{id}/friends', {
    responses: {
      '200': {
        description: 'Array of Profile has many Friends',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Friends)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Friends>,
  ): Promise<Friends[]> {
    return this.profileRepository.friends(id).find(filter);
  }

  @post('/profiles/{id}/friends', {
    responses: {
      '200': {
        description: 'Profile model instance',
        content: {'application/json': {schema: getModelSchemaRef(Friends)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Profile.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Friends, {
            title: 'NewFriendsInProfile',
            exclude: ['id'],
            optional: ['profileId']
          }),
        },
      },
    }) friends: Omit<Friends, 'id'>,
  ): Promise<Friends> {
    return this.profileRepository.friends(id).create(friends);
  }

  @patch('/profiles/{id}/friends', {
    responses: {
      '200': {
        description: 'Profile.Friends PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Friends, {partial: true}),
        },
      },
    })
    friends: Partial<Friends>,
    @param.query.object('where', getWhereSchemaFor(Friends)) where?: Where<Friends>,
  ): Promise<Count> {
    return this.profileRepository.friends(id).patch(friends, where);
  }

  @del('/profiles/{id}/friends', {
    responses: {
      '200': {
        description: 'Profile.Friends DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Friends)) where?: Where<Friends>,
  ): Promise<Count> {
    return this.profileRepository.friends(id).delete(where);
  }
}
