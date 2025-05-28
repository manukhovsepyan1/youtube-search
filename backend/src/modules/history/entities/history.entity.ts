import { Entity, PrimaryKey, Property } from '@mikro-orm/core';
import { v4 as uuid } from 'uuid';

@Entity()
export class History {
  @PrimaryKey()
  id: string = uuid();

  @Property()
  query!: string;

  @Property({ type: 'date'})
  timestamp: Date = new Date();

  @Property()
  count: number = 1;
}
