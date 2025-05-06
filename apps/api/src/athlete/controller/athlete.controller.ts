import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { AthleteService } from '../services/athlete/athlete.service';

@Controller('athlete')
export class AthleteController {
  constructor(private readonly athleteService: AthleteService) {}

  @Get()
  async findAll() {
    return this.athleteService.getAthletes();
  }

  @Get(':id')
  getAthleteById(@Param('id', ParseIntPipe) id: number) {
    return this.athleteService.getAthleteById(id);
  }
}
