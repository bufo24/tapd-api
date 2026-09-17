// Original file: protos/taprootassets.proto

import type { AssetTypePartial as _taprpc_AssetTypePartial, AssetType as _taprpc_AssetType } from '../taprpc/AssetType';
import type { Long } from '@grpc/proto-loader';

export interface AssetBurnPartial {
  'note'?: (string);
  'assetId'?: (Buffer | Uint8Array | string);
  'tweakedGroupKey'?: (Buffer | Uint8Array | string);
  'amount'?: (number | string | Long);
  'anchorTxid'?: (Buffer | Uint8Array | string);
  'assetType'?: (_taprpc_AssetTypePartial);
}

export interface AssetBurn {
  'note': (string);
  'assetId': (Buffer);
  'tweakedGroupKey': (Buffer);
  'amount': (string);
  'anchorTxid': (Buffer);
  'assetType': (_taprpc_AssetType);
}
