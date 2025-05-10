import { Module } from '@nestjs/common';
import { AthleteModule } from './athlete/athlete.module';
import { LocationsModule } from './locations/locations.module';
@Module({
  imports: [AthleteModule, LocationsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
