import EventDTO from './event.dto';

class CalendarItem {
  readonly date: string;
  readonly events: Array<Partial<EventDTO>>;
}

// tslint:disable-next-line:max-classes-per-file
export default class CalendarDTO {
  readonly data: CalendarItem[];
}
