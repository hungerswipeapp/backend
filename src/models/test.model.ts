import {Model, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Test extends Model {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  test?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Test>) {
    super(data);
  }
}

export interface TestRelations {
  // describe navigational properties here
}

export type TestWithRelations = Test & TestRelations;
