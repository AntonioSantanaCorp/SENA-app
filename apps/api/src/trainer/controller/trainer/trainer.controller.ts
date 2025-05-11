import { Controller, Get } from '@nestjs/common';
import { TrainerResponse } from '@sacd/core/http/responses';
import { TrainerService } from '../../services/trainer/trainer.service';

@Controller('trainer')
export class TrainerController {
  constructor(private readonly _trainerService: TrainerService) {}

  @Get()
  async getTrainers(): Promise<TrainerResponse[]> {
    return this._trainerService.getTrainers();
  }
}
