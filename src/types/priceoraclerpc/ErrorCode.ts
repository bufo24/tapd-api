// Original file: protos/priceoraclerpc/price_oracle.proto

export const ErrorCode = {
  UNSPECIFIED_ORACLE_ERROR_CODE: 'UNSPECIFIED_ORACLE_ERROR_CODE',
  UNSUPPORTED_ASSET_ORACLE_ERROR_CODE: 'UNSUPPORTED_ASSET_ORACLE_ERROR_CODE',
} as const;

export type ErrorCodePartial =
  | 'UNSPECIFIED_ORACLE_ERROR_CODE'
  | 0
  | 'UNSUPPORTED_ASSET_ORACLE_ERROR_CODE'
  | 1

export type ErrorCode = typeof ErrorCode[keyof typeof ErrorCode]
