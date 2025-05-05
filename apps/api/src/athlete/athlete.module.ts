import { Module } from '@nestjs/common';
import { AthleteController } from './athlete.controller';
import { AthleteService } from './athlete.service';
import { DatabaseModule } from '../core/database/database.module';
@Module({
  providers: [AthleteService],
  controllers: [AthleteController],
  imports: [DatabaseModule],
})
export class AthleteModule {}
