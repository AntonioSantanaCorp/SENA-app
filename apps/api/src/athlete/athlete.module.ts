import { DatabaseModule } from '@api/database';
import { Module } from '@nestjs/common';

import { LocationsService } from '../locations/service/locations.service';
import { AthleteController } from './controller/athlete.controller';
import { AthleteService } from './services/athlete/athlete.service';

@Module({
  imports: [DatabaseModule],
  providers: [AthleteService, LocationsService],
  exports: [AthleteService],
  controllers: [AthleteController],
})
export class AthleteModule {}
