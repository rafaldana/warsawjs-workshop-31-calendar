import { Injectable } from '@nestjs/common';
import Event from './event.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { calendar } from './stab';

@Injectable()
export class CalendarService {
  constructor(
    @InjectRepository(Event)
    private readonly eventRepository: Repository<Event>,
  ) {
  }

  async getDay(dateDay) {
    const events = await this.eventRepository.find();
    const result = events
      .filter(event => event.time.startsWith(dateDay))
      .map(event => ({
        ...event,
        id: event.id.toString(),
      }));
    return { data: result };
  }

  async getMonth(dateMonth) {
    const events = await this.eventRepository.find();
    const currentDate = new Date(dateMonth);
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const days = 42;
    const result = [];

    const selectedEvents = events
      .filter(event => event.time.startsWith(dateMonth))
      .map(event => ({
        ...event,
        id: event.id.toString(),
      }));


    for (let i = 1; i <= days; i++) {
      const date = new Date(year, month, i, 12)
        .toISOString()
        .substr(0, 10);

      const dayEvents = selectedEvents.filter(event =>
        event.time.startsWith(date),
      );
      result.push({
        date,
        events: dayEvents,
      });
    }

    return { data: result };
  }

  async createEvent(data) {
    const event = new Event();

    event.title = data.title || '';
    event.description = data.description || '';
    event.time = data.time || '';
    event.notification = data.notification || false;
    return this.eventRepository.save(event);
  }
}
