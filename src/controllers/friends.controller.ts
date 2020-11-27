import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Friends} from '../models/friends.model';
import {FriendsRepository} from '../repositories/friends.repository';

export class FriendsController {
  constructor(
    @repository(FriendsRepository)
    public friendsRepository : FriendsRepository,
  ) {}

  @post('/friends', {
    responses: {
      '200': {
        description: 'Friends model instance',
        content: {'application/json': {schema: getModelSchemaRef(Friends)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Friends, {
            title: 'NewFriends',
            exclude: ['FriendsId'],
          }),
        },
      },
    })
    friends: Omit<Friends, 'friendsid'>,
  ): Promise<Friends> {
    return this.friendsRepository.create(friends);
  }

  @get('/friends/count', {
    responses: {
      '200': {
        description: 'Friends model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(Friends) where?: Where<Friends>,
  ): Promise<Count> {
    return this.friendsRepository.count(where);
  }

  @get('/friends', {
    responses: {
      '200': {
        description: 'Array of Friends model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Friends, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Friends) filter?: Filter<Friends>,
  ): Promise<Friends[]> {
    return this.friendsRepository.find(filter);
  }

  @patch('/friends', {
    responses: {
      '200': {
        description: 'Friends PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Friends, {partial: true}),
        },
      },
    })
    friends: Friends,
    @param.where(Friends) where?: Where<Friends>,
  ): Promise<Count> {
    return this.friendsRepository.updateAll(friends, where);
  }

  @get('/friends/{id}', {
    responses: {
      '200': {
        description: 'Friends model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Friends, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Friends, {exclude: 'where'}) filter?: FilterExcludingWhere<Friends>
  ): Promise<Friends> {
    return this.friendsRepository.findById(id, filter);
  }

  @patch('/friends/{id}', {
    responses: {
      '204': {
        description: 'Friends PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Friends, {partial: true}),
        },
      },
    })
    friends: Friends,
  ): Promise<void> {
    await this.friendsRepository.updateById(id, friends);
  }

  @put('/friends/{id}', {
    responses: {
      '204': {
        description: 'Friends PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() friends: Friends,
  ): Promise<void> {
    await this.friendsRepository.replaceById(id, friends);
  }

  @del('/friends/{id}', {
    responses: {
      '204': {
        description: 'Friends DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.friendsRepository.deleteById(id);
  }
}
