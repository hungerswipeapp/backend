import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    postgresql: {schema:'public',table: 'friend'},
  },
})
export class Friends extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  FriendsId?: number;

  @property({
    type: 'number',
    required: true,
  })
  UserOneID: number;

  @property({
    type: 'number',
    required: true,
  })
  UserTwoID: number;

  @property({
    type: 'number',
    required: true,
  })
  Status: number;

  @property({
    type: 'number',
    required: true,
  })
  ActionUserID: number;


  constructor(data?: Partial<Friends>) {
    super(data);
  }
}

export interface FriendsRelations {
  // describe navigational properties here
}

export type FriendsWithRelations = Friends & FriendsRelations;
