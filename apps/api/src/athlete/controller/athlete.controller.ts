import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { AthleteDto } from '../models/athlete.dto';
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

  @Post()
  create(@Body() athlete: AthleteDto) {
    return this.athleteService.createAthlete(athlete);
  }
}
