import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CalendarService } from './calendar.service';
import { CalendarDTO, DayDTO, EventDTO, SubscriptionDTO } from './dtos';

// TODO add passport authentication - bonus?

@Controller()
export class CalendarController {
  constructor(private readonly calendarService: CalendarService) {}

  @Get()
  getRoot(): string {
    return 'Hello World!';
  }

  @Get('day')
  getDay(@Query('date') date: string): DayDTO {
    return this.calendarService.getDay(date);
  }

  @Get('calendar')
  getMonth(@Query('month') month: string): CalendarDTO {
    return this.calendarService.getMonth(month);
  }

  @Post('event')
  async createEvent(@Body() eventDto: EventDTO) {
    const event = await this.calendarService.createEvent(eventDto);

    return { id: event.id };
  }

  @Put('event')
  updateEvent(@Query('id') eventId: string) {
    // TODO implement me
  }

  @Delete('event')
  deleteEvent(@Query('id') eventId: string) {
    // TODO implement me
  }

  @Post('subscriptions')
  registerSubscription(@Body() payload: SubscriptionDTO) {
    // TODO implement me
  }
}
