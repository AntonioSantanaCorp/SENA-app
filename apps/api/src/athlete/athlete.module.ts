import { DatabaseModule } from '@api/database';
import { Module } from '@nestjs/common';
import { ControllerController } from './controller/controller.controller';
import { AthleteService } from './service/athlete/athlete.service';
import { CategoriesService } from './service/categories/categories.service';

@Module({
  imports: [DatabaseModule],
  providers: [AthleteService, CategoriesService],
  exports: [AthleteService, CategoriesService],
  controllers: [ControllerController],
})
export class AthleteModule {}
