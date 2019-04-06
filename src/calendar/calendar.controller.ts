import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
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
  getDay(@Query('date') date: string): Promise<DayDTO> {
    return this.calendarService.getDay(date);
  }

  @Get('calendar')
  getMonth(@Query('month') month: string): Promise<CalendarDTO> {
    return this.calendarService.getMonth(month);
  }

  @Post('event')
  async createEvent(@Body() eventDto: EventDTO) {
    const event = await this.calendarService.createEvent(eventDto);

    return { id: event.id };
  }

  @Put('event/:id')
  async updateEvent(@Param('id') eventId: string, @Body() eventDto: EventDTO) {
    const id = await this.calendarService.updateEvent(eventId, eventDto);

    return { id };
  }

  @Delete('event/:id')
  async deleteEvent(@Param('id') eventId: string) {
    await this.calendarService.deleteEvent(eventId);

    return { id: eventId };
  }

  @Post('subscriptions')
  registerSubscription(@Body() payload: SubscriptionDTO) {
    // TODO implement me
  }
}
