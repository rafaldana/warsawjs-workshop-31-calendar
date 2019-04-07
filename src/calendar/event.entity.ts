import { Entity, Column, ObjectIdColumn, ObjectID } from 'typeorm';

@Entity()
export default class Event {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  time: string;

  @Column()
  notification: boolean;
}
