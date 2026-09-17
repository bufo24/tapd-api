// Original file: protos/portfoliopilotrpc/portfolio_pilot.proto

import type { AssetRatePartial as _portfoliopilotrpc_AssetRatePartial, AssetRate as _portfoliopilotrpc_AssetRate } from '../portfoliopilotrpc/AssetRate';

export interface QueryAssetRatesResponsePartial {
  'assetRate'?: (_portfoliopilotrpc_AssetRatePartial | null);
}

export interface QueryAssetRatesResponse {
  'assetRate': (_portfoliopilotrpc_AssetRate | null);
}
