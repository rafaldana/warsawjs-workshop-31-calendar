# WarsawJS Calendar app server
Backend for WarsawJS Node.js workshop - calendar app

## Prerequisites
- Node 10+
- Docker
- Nest.js cli (doesn't work as dev dependency :( )
```
npm i -g @nestjs/cli
```

## Notes
- Nest.js (looks amazing so far!)

- dotenv!
https://docs.nestjs.com/techniques/configuration

### Web
- kompresja?
https://docs.nestjs.com/techniques/compression

### Scheduler
- Agenda, inne mają przekombinowany interfejs
https://github.com/agenda/agenda

### DB
- TypeORM with ActiveRecord style

- Inject db config from .env copied from .env.example, as shown here:
https://docs.nestjs.com/techniques/database#async-configuration 

- migracje?
https://github.com/typeorm/typeorm/blob/master/docs/migrations.md



- Zaznaczyć, ze jest sporo uproszczeń! To 8h warsztaty, nie bootcamp :)
