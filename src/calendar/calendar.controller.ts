import { Controller, Get, Post, Query, Body} from '@nestjs/common';
import { day, calendar } from './stab';
import { CalendarService } from './calendar.service';

@Controller('')
export class CalendarController {
  constructor(private readonly calendarService: CalendarService) {
  }

  @Get('/day')
  getDay(@Query('date') date: string) {
    return this.calendarService.getDay(date);
  }

  @Get('/calendar')
  getMonth(@Query('month') month: string) {
    return this.calendarService.getMonth(month);
  }

  @Post('/event')
  async createEvent(@Body() message) {
    const event = await this.calendarService.createEvent(message);
    return { id: event.id };
  }
}
