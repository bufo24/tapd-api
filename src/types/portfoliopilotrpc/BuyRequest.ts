// Original file: protos/portfoliopilotrpc/portfolio_pilot.proto

import type { AssetSpecifierPartial as _portfoliopilotrpc_AssetSpecifierPartial, AssetSpecifier as _portfoliopilotrpc_AssetSpecifier } from '../portfoliopilotrpc/AssetSpecifier';
import type { AssetRatePartial as _portfoliopilotrpc_AssetRatePartial, AssetRate as _portfoliopilotrpc_AssetRate } from '../portfoliopilotrpc/AssetRate';
import type { FixedPointPartial as _portfoliopilotrpc_FixedPointPartial, FixedPoint as _portfoliopilotrpc_FixedPoint } from '../portfoliopilotrpc/FixedPoint';
import type { ExecutionPolicyPartial as _portfoliopilotrpc_ExecutionPolicyPartial, ExecutionPolicy as _portfoliopilotrpc_ExecutionPolicy } from '../portfoliopilotrpc/ExecutionPolicy';
import type { Long } from '@grpc/proto-loader';

export interface BuyRequestPartial {
  'assetSpecifier'?: (_portfoliopilotrpc_AssetSpecifierPartial | null);
  'assetMaxAmount'?: (number | string | Long);
  'assetRateHint'?: (_portfoliopilotrpc_AssetRatePartial | null);
  'priceOracleMetadata'?: (string);
  'peerId'?: (Buffer | Uint8Array | string);
  'assetMinAmount'?: (number | string | Long);
  'assetRateLimit'?: (_portfoliopilotrpc_FixedPointPartial | null);
  'executionPolicy'?: (_portfoliopilotrpc_ExecutionPolicyPartial);
}

export interface BuyRequest {
  'assetSpecifier': (_portfoliopilotrpc_AssetSpecifier | null);
  'assetMaxAmount': (string);
  'assetRateHint': (_portfoliopilotrpc_AssetRate | null);
  'priceOracleMetadata': (string);
  'peerId': (Buffer);
  'assetMinAmount': (string);
  'assetRateLimit': (_portfoliopilotrpc_FixedPoint | null);
  'executionPolicy': (_portfoliopilotrpc_ExecutionPolicy);
}
