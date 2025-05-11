import { Module } from '@nestjs/common';

import { DatabaseService } from '@api/database';
import { LocationsService } from '../locations/service/locations.service';
import { TrainerController } from './controller/trainer/trainer.controller';
import { TrainerService } from './services/trainer/trainer.service';

@Module({
  providers: [TrainerService, DatabaseService, LocationsService],
  controllers: [TrainerController],
})
export class TrainerModule {}
