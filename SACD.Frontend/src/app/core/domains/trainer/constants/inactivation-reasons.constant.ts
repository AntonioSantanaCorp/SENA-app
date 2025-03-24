export const TrainerInactivationReason = {
  Mora: 'Despido',
  Desercion: 'Renuncia voluntaria',
  Otro: 'Otro',
} as const;

export const TRAINER_INACTIVATION_REASONS: ReadonlyArray<
  (typeof TrainerInactivationReason)[keyof typeof TrainerInactivationReason]
> = Object.values(TrainerInactivationReason);
