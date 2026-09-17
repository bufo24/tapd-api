// Original file: protos/universerpc/universe.proto

import type { AssetStatsSnapshotPartial as _universerpc_AssetStatsSnapshotPartial, AssetStatsSnapshot as _universerpc_AssetStatsSnapshot } from '../universerpc/AssetStatsSnapshot';

export interface UniverseAssetStatsPartial {
  'assetStats'?: (_universerpc_AssetStatsSnapshotPartial)[];
  'hasMore'?: (boolean);
}

export interface UniverseAssetStats {
  'assetStats': (_universerpc_AssetStatsSnapshot)[];
  'hasMore': (boolean);
}
