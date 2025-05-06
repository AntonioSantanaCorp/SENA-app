import { DatabaseModule } from '@api/database';
import { Module } from '@nestjs/common';
import { AthleteService } from './services/athlete/athlete.service';
import { CategoriesService } from './services/categories/categories.service';
import { AthleteController } from './controller/athlete.controller';

@Module({
  imports: [DatabaseModule],
  providers: [AthleteService, CategoriesService],
  exports: [AthleteService, CategoriesService],
  controllers: [AthleteController],
})
export class AthleteModule {}
