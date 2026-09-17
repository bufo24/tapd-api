// Original file: protos/portfoliopilotrpc/portfolio_pilot.proto

import type { AssetSpecifierPartial as _portfoliopilotrpc_AssetSpecifierPartial, AssetSpecifier as _portfoliopilotrpc_AssetSpecifier } from '../portfoliopilotrpc/AssetSpecifier';
import type { AssetTransferDirectionPartial as _portfoliopilotrpc_AssetTransferDirectionPartial, AssetTransferDirection as _portfoliopilotrpc_AssetTransferDirection } from '../portfoliopilotrpc/AssetTransferDirection';
import type { IntentPartial as _portfoliopilotrpc_IntentPartial, Intent as _portfoliopilotrpc_Intent } from '../portfoliopilotrpc/Intent';
import type { AssetRatePartial as _portfoliopilotrpc_AssetRatePartial, AssetRate as _portfoliopilotrpc_AssetRate } from '../portfoliopilotrpc/AssetRate';
import type { Long } from '@grpc/proto-loader';

export interface QueryAssetRatesRequestPartial {
  'assetSpecifier'?: (_portfoliopilotrpc_AssetSpecifierPartial | null);
  'direction'?: (_portfoliopilotrpc_AssetTransferDirectionPartial);
  'intent'?: (_portfoliopilotrpc_IntentPartial);
  'assetAmount'?: (number | string | Long);
  'paymentAmount'?: (number | string | Long);
  'assetRateHint'?: (_portfoliopilotrpc_AssetRatePartial | null);
  'priceOracleMetadata'?: (string);
  'peerId'?: (Buffer | Uint8Array | string);
  'expiryTimestamp'?: (number | string | Long);
}

export interface QueryAssetRatesRequest {
  'assetSpecifier': (_portfoliopilotrpc_AssetSpecifier | null);
  'direction': (_portfoliopilotrpc_AssetTransferDirection);
  'intent': (_portfoliopilotrpc_Intent);
  'assetAmount': (string);
  'paymentAmount': (string);
  'assetRateHint': (_portfoliopilotrpc_AssetRate | null);
  'priceOracleMetadata': (string);
  'peerId': (Buffer);
  'expiryTimestamp': (string);
}
