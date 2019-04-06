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
import { CalendarDTO, DayDTO, SubscriptionDTO } from './dtos';

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
  getMonth(@Query('month') month: CalendarDTO) {
    return this.calendarService.getMonth(month);
  }

  @Post('event')
  async createEvent() {
    // TODO implement me
    await this.calendarService.createEvent('stub');

    return { id: '1' };
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
