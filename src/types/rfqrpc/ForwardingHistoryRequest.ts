// Original file: protos/rfqrpc/rfq.proto

import type { AssetSpecifierPartial as _rfqrpc_AssetSpecifierPartial, AssetSpecifier as _rfqrpc_AssetSpecifier } from '../rfqrpc/AssetSpecifier';
import type { Long } from '@grpc/proto-loader';

export interface ForwardingHistoryRequestPartial {
  'minTimestamp'?: (number | string | Long);
  'maxTimestamp'?: (number | string | Long);
  'peer'?: (Buffer | Uint8Array | string);
  'assetSpecifier'?: (_rfqrpc_AssetSpecifierPartial | null);
  'limit'?: (number);
  'offset'?: (number);
}

export interface ForwardingHistoryRequest {
  'minTimestamp': (string);
  'maxTimestamp': (string);
  'peer': (Buffer);
  'assetSpecifier': (_rfqrpc_AssetSpecifier | null);
  'limit': (number);
  'offset': (number);
}
