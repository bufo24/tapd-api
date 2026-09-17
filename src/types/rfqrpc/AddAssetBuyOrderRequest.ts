// Original file: protos/rfqrpc/rfq.proto

import type { AssetSpecifierPartial as _rfqrpc_AssetSpecifierPartial, AssetSpecifier as _rfqrpc_AssetSpecifier } from '../rfqrpc/AssetSpecifier';
import type { FixedPointPartial as _rfqrpc_FixedPointPartial, FixedPoint as _rfqrpc_FixedPoint } from '../rfqrpc/FixedPoint';
import type { ExecutionPolicyPartial as _rfqrpc_ExecutionPolicyPartial, ExecutionPolicy as _rfqrpc_ExecutionPolicy } from '../rfqrpc/ExecutionPolicy';
import type { Long } from '@grpc/proto-loader';

export interface AddAssetBuyOrderRequestPartial {
  'assetSpecifier'?: (_rfqrpc_AssetSpecifierPartial | null);
  'assetMaxAmt'?: (number | string | Long);
  'expiry'?: (number | string | Long);
  'peerPubKey'?: (Buffer | Uint8Array | string);
  'timeoutSeconds'?: (number);
  'skipAssetChannelCheck'?: (boolean);
  'priceOracleMetadata'?: (string);
  'assetMinAmt'?: (number | string | Long);
  'assetRateLimit'?: (_rfqrpc_FixedPointPartial | null);
  'executionPolicy'?: (_rfqrpc_ExecutionPolicyPartial);
  '_assetMinAmt'?: "assetMinAmt";
}

export interface AddAssetBuyOrderRequest {
  'assetSpecifier': (_rfqrpc_AssetSpecifier | null);
  'assetMaxAmt': (string);
  'expiry': (string);
  'peerPubKey': (Buffer);
  'timeoutSeconds': (number);
  'skipAssetChannelCheck': (boolean);
  'priceOracleMetadata': (string);
  'assetMinAmt'?: (string);
  'assetRateLimit': (_rfqrpc_FixedPoint | null);
  'executionPolicy': (_rfqrpc_ExecutionPolicy);
  '_assetMinAmt': "assetMinAmt";
}
