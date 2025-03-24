export const AthleteInactivationReason = {
  Mora: 'Mora en pagos',
  Desercion: 'Deserción voluntaria',
  Otro: 'Otro',
} as const;

export const ATHLETE_INACTIVATION_REASONS: ReadonlyArray<
  (typeof AthleteInactivationReason)[keyof typeof AthleteInactivationReason]
> = Object.values(AthleteInactivationReason);
