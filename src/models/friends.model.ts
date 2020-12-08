import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Profile} from './profile.model';

@model({
  settings: {
    postgresql: {schema: 'public', table: 'friends'},
  },
})
export class Friends extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
    postgresql: {
      columnName: 'id',
      dataType: 'integer',
      dataLength: null,
      dataPrecision: null,
      dataScale: 0,
      nullable: 'NO',
    }
  })
  id?: number;

  @property({
    type: 'number',
    required: true,
    postgresql: {
      columnName: 'useroneId',
      dataType: 'integer',
      dataLength: null,
      dataPrecision: null,
      dataScale: 0,
      nullable: 'NO',
    }
  })
  useroneId: number;

  @property({
    type: 'number',
    required: true,
    postgresql: {
      columnName: 'usertwoId',
      dataType: 'integer',
      dataLength: null,
      dataPrecision: null,
      dataScale: 0,
      nullable: 'NO',
    }
  })
  usertwoId: number;

  @property({
    type: 'number',
    required: true,
    postgresql: {
      columnName: 'status',
      dataType: 'integer',
      dataLength: null,
      dataPrecision: null,
      dataScale: 0,
      nullable: 'NO',
    }
  })
  status: number;

  @belongsTo(() => Profile)
  profileId: number;
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Friends>) {
    super(data);
  }
}

export interface FriendsRelations {
  // describe navigational properties here
}

export type FriendsWithRelations = Friends & FriendsRelations;
