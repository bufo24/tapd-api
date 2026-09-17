// Original file: protos/tapcommon.proto

export const SortDirection = {
  SORT_DIRECTION_DESC: 'SORT_DIRECTION_DESC',
  SORT_DIRECTION_ASC: 'SORT_DIRECTION_ASC',
} as const;

export type SortDirectionPartial =
  | 'SORT_DIRECTION_DESC'
  | 0
  | 'SORT_DIRECTION_ASC'
  | 1

export type SortDirection = typeof SortDirection[keyof typeof SortDirection]
