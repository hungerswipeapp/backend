import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Restaurants extends Entity {

  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  restaurantName: string;

  @property({
    type: 'string',
    required: true,
  })
  restaurantAddress: string;

  @property({
    type: 'number',
  })
  restaurantPhone?: number;

  @property({
    type: 'string',
    required: true,
  })
  restaurantCity: string;

  @property({
    type: 'string',
    required: true,
  })
  restaurantState: string;

  @property({
    type: 'string',
    required: true,
  })
  restaurantPostCode: number;

  @property({
    type: 'number',
    required: true,
  })
  restaurantPrice: number;

  @property({
    type: 'string',
    required: true,
  })
  restaurantCountry: string;

  @property({
    type: 'string',
    required: true,
  })
  restaurantBio: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Restaurants>) {
    super(data);
  }
}

export interface RestaurantsRelations {
  // describe navigational properties here
}

export type RestaurantsWithRelations = Restaurants & RestaurantsRelations;
