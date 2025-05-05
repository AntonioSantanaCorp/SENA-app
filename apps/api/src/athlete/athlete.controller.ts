import { Controller, Get } from '@nestjs/common';

@Controller('athlete')
export class AthleteController {
  // Define your controller methods here
  @Get()
  getAthletes() {
    return 'Hello World';
  }
}
