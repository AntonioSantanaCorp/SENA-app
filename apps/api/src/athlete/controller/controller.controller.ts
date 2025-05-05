import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { AthleteService } from '../service/athlete.service';

@Controller('athlete')
export class ControllerController {
  constructor(private readonly athleteService: AthleteService) {}

  @Get()
  getAthletes() {
    return this.athleteService.getAthletes();
  }

  @Get(':id')
  getAthleteById(@Param('id', ParseIntPipe) id: number) {
    return this.athleteService.getAthleteById(id);
  }
}
