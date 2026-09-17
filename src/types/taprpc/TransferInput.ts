// Original file: protos/taprootassets.proto

import type { AssetTypePartial as _taprpc_AssetTypePartial, AssetType as _taprpc_AssetType } from '../taprpc/AssetType';
import type { Long } from '@grpc/proto-loader';

export interface TransferInputPartial {
  'anchorPoint'?: (string);
  'assetId'?: (Buffer | Uint8Array | string);
  'scriptKey'?: (Buffer | Uint8Array | string);
  'amount'?: (number | string | Long);
  'groupKey'?: (Buffer | Uint8Array | string);
  'assetType'?: (_taprpc_AssetTypePartial);
}

export interface TransferInput {
  'anchorPoint': (string);
  'assetId': (Buffer);
  'scriptKey': (Buffer);
  'amount': (string);
  'groupKey': (Buffer);
  'assetType': (_taprpc_AssetType);
}
