import EventDTO from './event.dto';

export default class CalendarDTO {
  readonly date: string;
  readonly events: any;
  // readonly events: Array<Partial<EventDTO>>;
}
