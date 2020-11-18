import {Entity, model, property} from '@loopback/repository';

@model()
export class Friends extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  FriendsId?: number;

  @property({
    type: 'string',
    required: true,
  })
  UserOne: string;

  @property({
    type: 'string',
    required: true,
  })
  UserTwo: string;

  @property({
    type: 'number',
    required: true,
  })
  Status: number;


  constructor(data?: Partial<Friends>) {
    super(data);
  }
}

export interface FriendsRelations {
  // describe navigational properties here
}

export type FriendsWithRelations = Friends & FriendsRelations;
