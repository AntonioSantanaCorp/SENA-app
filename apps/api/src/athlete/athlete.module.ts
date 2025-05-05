import { DatabaseModule } from '@api/database';
import { Module } from '@nestjs/common';
import { ControllerController } from './controller/controller.controller';
import { AthleteService } from './service/athlete.service';
@Module({
  imports: [DatabaseModule],
  providers: [AthleteService],
  exports: [AthleteService],
  controllers: [ControllerController],
})
export class AthleteModule {}
