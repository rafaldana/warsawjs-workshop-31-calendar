import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { calendar, day } from './stubs';
import { CalendarDTO, EventDTO, DayDTO } from './dtos';
import Event from './event.entity';

@Injectable()
export class CalendarService {
  constructor(
    @InjectRepository(Event)
    private readonly eventRepository: Repository<Event>,
  ) {}

  getDay(date): DayDTO {
    // TODO fetch all events for the given day
    return day;
  }

  getMonth(date): CalendarDTO {
    /*
      TODO:
       - fetch all days within given month, invoke getDay for each
     */
    return calendar;
  }

  async createEvent(eventDto: EventDTO): Promise<Event> {
    const event = await this.eventRepository.create(eventDto);
    await this.eventRepository.save(event);

    return event;
  }
}
