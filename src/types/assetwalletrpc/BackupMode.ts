// Original file: protos/assetwalletrpc/assetwallet.proto

export const BackupMode = {
  RAW: 'RAW',
  COMPACT: 'COMPACT',
  OPTIMISTIC: 'OPTIMISTIC',
} as const;

export type BackupModePartial =
  | 'RAW'
  | 0
  | 'COMPACT'
  | 1
  | 'OPTIMISTIC'
  | 2

export type BackupMode = typeof BackupMode[keyof typeof BackupMode]
