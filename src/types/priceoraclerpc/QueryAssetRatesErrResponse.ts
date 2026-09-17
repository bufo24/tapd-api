// Original file: protos/priceoraclerpc/price_oracle.proto

import type { ErrorCodePartial as _priceoraclerpc_ErrorCodePartial, ErrorCode as _priceoraclerpc_ErrorCode } from '../priceoraclerpc/ErrorCode';

export interface QueryAssetRatesErrResponsePartial {
  'message'?: (string);
  'code'?: (_priceoraclerpc_ErrorCodePartial);
}

export interface QueryAssetRatesErrResponse {
  'message': (string);
  'code': (_priceoraclerpc_ErrorCode);
}
