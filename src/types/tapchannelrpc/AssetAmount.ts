// Original file: protos/tapchannelrpc/tapchannel.proto

import type { Long } from '@grpc/proto-loader';

export interface AssetAmountPartial {
  'assetId'?: (Buffer | Uint8Array | string);
  'amount'?: (number | string | Long);
  'groupKey'?: (Buffer | Uint8Array | string);
}

export interface AssetAmount {
  'assetId': (Buffer);
  'amount': (string);
  'groupKey': (Buffer);
}
