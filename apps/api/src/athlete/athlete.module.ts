import { DatabaseModule } from '@api/database';
import { Module } from '@nestjs/common';

import { LocationsService } from '../locations/service/locations.service';
import { AthleteController } from './controller/athlete.controller';
import { AthleteService } from './services/athlete/athlete.service';
import { CategoriesService } from './services/categories/categories.service';

@Module({
  imports: [DatabaseModule],
  providers: [AthleteService, CategoriesService, LocationsService],
  exports: [AthleteService, CategoriesService],
  controllers: [AthleteController],
})
export class AthleteModule {}
