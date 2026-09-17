// Original file: protos/universerpc/universe.proto

import type { AssetKeyPartial as _universerpc_AssetKeyPartial, AssetKey as _universerpc_AssetKey } from '../universerpc/AssetKey';

export interface AssetLeafKeyResponsePartial {
  'assetKeys'?: (_universerpc_AssetKeyPartial)[];
  'hasMore'?: (boolean);
}

export interface AssetLeafKeyResponse {
  'assetKeys': (_universerpc_AssetKey)[];
  'hasMore': (boolean);
}
