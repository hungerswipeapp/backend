import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    postgresql: {schema: 'public', table: 'chatroom'},
  },
})
export class Chatroom extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Chatroom>) {
    super(data);
  }
}

export interface ChatroomRelations {
  // describe navigational properties here
}

export type ChatroomWithRelations = Chatroom & ChatroomRelations;
