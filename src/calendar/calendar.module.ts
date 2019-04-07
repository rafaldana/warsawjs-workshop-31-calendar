import { Module } from '@nestjs/common';
import { CalendarController } from './calendar.controller';
import { CalendarService } from './calendar.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import Event from './event.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Event])],
  controllers: [CalendarController],
  providers: [CalendarService],
})
export class CalendarModule {}
