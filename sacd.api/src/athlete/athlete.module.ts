import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { AthleteController } from './athlete.controller';
import { AthleteService } from './athlete.service';

@Module({
  providers: [AthleteService],
  controllers: [AthleteController],
  imports: [PrismaModule],
})
export class AthleteModule {}
