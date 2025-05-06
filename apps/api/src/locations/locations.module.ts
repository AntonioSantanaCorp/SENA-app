import { DatabaseModule } from '@api/database';
import { Module } from '@nestjs/common';
import { LocationsController } from './controller/locations.controller';
import { LocationsService } from './service/locations.service';

@Module({
  imports: [DatabaseModule],
  controllers: [LocationsController],
  providers: [LocationsService],
})
export class LocationsModule {}
