import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { TrainerResponse } from '@sacd/core/http/responses';
import { TrainerService } from '../../services/trainer/trainer.service';

@Controller('trainer')
export class TrainerController {
  constructor(private readonly _trainerService: TrainerService) {}

  @Get()
  async getTrainers(): Promise<TrainerResponse[]> {
    return this._trainerService.getTrainers();
  }

  @Get(':id')
  async getTrainerById(
    @Param('id', ParseIntPipe) id: number
  ): Promise<TrainerResponse> {
    return this._trainerService.getTrainerById(id);
  }
}
