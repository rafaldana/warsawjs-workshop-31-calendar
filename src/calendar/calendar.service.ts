import { Injectable } from '@nestjs/common';

@Injectable()
export class CalendarService {
  // TODO add event model

  // TODO add type
  getDay(date) {
    // TODO fetch all events for the given day
    return { text: 'get day' };
  }

  // TODO add type
  getMonth(date) {
    /*
      TODO:
       - fetch all days within given month, invoke getDay for each
     */
    return { text: 'get month' };
  }
}
