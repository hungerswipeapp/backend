import {Entity, model, property, hasMany} from '@loopback/repository';
import {Friends} from './friends.model';

@model({
  settings: {
    postgresql: {schema:'public',table: 'profile'},
  },
})
export class Profile extends Entity {
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
    type: 'string',
    required: true,
    postgresql: {
      columnName: 'firstName',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'NO',
    }
  })
  firstName: string;

  @property({
    type: 'string',
    required: true,
    postgresql: {
      columnName: 'lastName',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'NO',
    }
  })
  lastName: string;

  @property({
    type: 'string',
    required: true,
    postgresql: {
      columnName: 'userName',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'NO',
    }
  })
  userName: string;

  @property({
    type: 'string',
    postgresql: {
      columnName: 'email',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    }
  })
  email?: string;

  @property({
    type: 'string',
    postgresql: {
      columnName: 'phone',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    }
  })
  phone?: string;

  @property({
    type: 'string',
    postgresql: {
      columnName: 'userImage',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    }
  })
  userImage?: string;

  @property({
    type: 'string',
    postgresql: {
      columnName: 'street',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    }
  })
  locationSt: string;

  @property({
    type: 'string',
    postgresql: {
      columnName: 'apt',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    }
  })
  locationApt?: string;

  @property({
    type: 'string',
    postgresql: {
      columnName: 'city',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    }
  })
  locationCity: string;

  @property({
    type: 'string',
    postgresql: {
      columnName: 'state',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    }
  })
  locationState: string;

  @property({
    type: 'string',
    postgresql: {
      columnName: 'zip',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    }
  })
  locationZip: string;


  @hasMany(() => Friends)
  friends: Friends[];

  constructor(data?: Partial<Profile>) {
    super(data);
  }
}

export interface ProfileRelations {
  // describe navigational properties here
}

export type ProfileWithRelations = Profile & ProfileRelations;
