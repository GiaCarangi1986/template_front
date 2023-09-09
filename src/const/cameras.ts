export const COUNT = 8

enum SHORT_ENUM {
  'в' = 'в',
  'н' = 'н'
}

enum FULL_ENUM {
  'вверх' = 'вверх',
  'низ' = 'низ'
}

enum POSITION_ENUM {
  'top' = 'top',
  'bottom' = 'bottom'
}

export type PositionType = {
  short: keyof typeof SHORT_ENUM,
  full: keyof typeof FULL_ENUM,
  name: keyof typeof POSITION_ENUM
}

export const POSITION_DESCRIPTION = {
  [POSITION_ENUM.top]: {
    short: SHORT_ENUM.в,
    full: FULL_ENUM.вверх,
    name: POSITION_ENUM.top
  },
  [POSITION_ENUM.bottom]: {
    short: SHORT_ENUM.н,
    full: FULL_ENUM.низ,
    name: POSITION_ENUM.bottom
  }
}