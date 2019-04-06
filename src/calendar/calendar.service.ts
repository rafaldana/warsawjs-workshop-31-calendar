import { Injectable } from '@nestjs/common';

import { calendar, day } from './stubs';
import { CalendarDTO, DayDTO } from './dtos';

@Injectable()
export class CalendarService {
  // TODO add event model

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
}
