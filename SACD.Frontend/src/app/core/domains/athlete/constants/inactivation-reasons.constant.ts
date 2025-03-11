export const InactivationReason = {
  Mora: 'Mora en pagos',
  Desercion: 'Deserción voluntaria',
  Otro: 'Otro',
} as const;

export const INACTIVATION_REASONS_LIST: ReadonlyArray<
  (typeof InactivationReason)[keyof typeof InactivationReason]
> = Object.values(InactivationReason);
