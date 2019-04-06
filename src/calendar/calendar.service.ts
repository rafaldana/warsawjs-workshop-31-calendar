import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CalendarDTO, EventDTO, DayDTO } from './dtos';
import Event from './event.entity';

@Injectable()
export class CalendarService {
  constructor(
    @InjectRepository(Event)
    private readonly eventRepository: Repository<Event>,
  ) {}

  async getDay(date): Promise<DayDTO> {
    const events = await this.eventRepository.find();

    // find options don't support mongodb, so we have to filter results manually
    const result = events
      .filter(event => event.time.startsWith(date))
      .map(event => ({
        ...event,
        id: event.id.toString(),
      }));

    return { data: result };
  }

  async getMonth(inputDate): Promise<CalendarDTO> {
    const events = await this.eventRepository.find();

    // find options don't support mongodb, so we have to filter results manually
    const filteredEvents = events
      .filter(event => event.time.startsWith(inputDate))
      .map(event => ({
        ...event,
        id: event.id.toString(),
      }));

    const month = new Date(inputDate);
    const originalYear = month.getFullYear();
    const originalMonth = month.getMonth();
    const calendarDays = 42;
    const result = [];
    for (let i = 1; i <= calendarDays; i++) {
      const date = new Date(originalYear, originalMonth, i, 12)
        .toISOString()
        .substr(0, 10);

      const dayEvents = filteredEvents.filter(event =>
        event.time.startsWith(date),
      );
      result.push({
        date,
        events: dayEvents,
      });
    }

    return { data: result };
  }

  async createEvent(eventDto: EventDTO): Promise<Event> {
    const event = await this.eventRepository.create(eventDto);
    await this.eventRepository.save(event);

    return event;
  }

  async updateEvent(id: string, eventDto: EventDTO): Promise<string> {
    await this.eventRepository.update(id, eventDto);

    return id;
  }

  async deleteEvent(id: string): Promise<string> {
    await this.eventRepository.delete(id);

    return id;
  }
}
