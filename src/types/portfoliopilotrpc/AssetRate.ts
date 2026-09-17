// Original file: protos/portfoliopilotrpc/portfolio_pilot.proto

import type { FixedPointPartial as _portfoliopilotrpc_FixedPointPartial, FixedPoint as _portfoliopilotrpc_FixedPoint } from '../portfoliopilotrpc/FixedPoint';
import type { Long } from '@grpc/proto-loader';

export interface AssetRatePartial {
  'rate'?: (_portfoliopilotrpc_FixedPointPartial | null);
  'expiryTimestamp'?: (number | string | Long);
}

export interface AssetRate {
  'rate': (_portfoliopilotrpc_FixedPoint | null);
  'expiryTimestamp': (string);
}
