import { Module } from '@nestjs/common';
import { AthleteModule } from './athlete/athlete.module';
@Module({
  imports: [AthleteModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
