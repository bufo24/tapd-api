// Original file: protos/taprootassets.proto

import type { AssetPartial as _taprpc_AssetPartial, Asset as _taprpc_Asset } from '../taprpc/Asset';

export interface FetchAssetResponsePartial {
  'assets'?: (_taprpc_AssetPartial)[];
}

export interface FetchAssetResponse {
  'assets': (_taprpc_Asset)[];
}
