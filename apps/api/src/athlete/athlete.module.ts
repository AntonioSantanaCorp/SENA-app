import { Module } from '@nestjs/common';
import { DatabaseModule } from '../core/database/database.module';
import { AthleteService } from './services/athlete/athlete.service';
@Module({
  imports: [DatabaseModule],
  providers: [AthleteService],
  exports: [AthleteService],
})
export class AthleteModule {}
