import {Entity, model, property} from '@loopback/repository';

@model()
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
    },
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
    type: 'number',
    postgresql: {
      columnName: 'phone',
      dataType: 'integer',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'YES',
    }
  })
  phone?: number;

  @property({
    type: 'string',
    required: true,
    postgresql: {
      columnName: 'street',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'NO',
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
    required: true,
    postgresql: {
      columnName: 'city',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'NO',
    }
  })
  locationCity: string;

  @property({
    type: 'string',
    required: true,
    postgresql: {
      columnName: 'state',
      dataType: 'text',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'NO',
    }
  })
  locationState: string;

  @property({
    type: 'number',
    required: true,
    postgresql: {
      columnName: 'zip',
      dataType: 'integer',
      dataLength: null,
      dataPrecision: null,
      dataScale: null,
      nullable: 'NO',
    }
  })
  locationZip: number;


  constructor(data?: Partial<Profile>) {
    super(data);
  }
}

export interface ProfileRelations {
  // describe navigational properties here
}

export type ProfileWithRelations = Profile & ProfileRelations;
