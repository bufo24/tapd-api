// Original file: protos/universerpc/universe.proto

import type { UniverseRootPartial as _universerpc_UniverseRootPartial, UniverseRoot as _universerpc_UniverseRoot } from '../universerpc/UniverseRoot';

export interface AssetRootResponsePartial {
  'universeRoots'?: ({[key: string]: _universerpc_UniverseRootPartial});
  'hasMore'?: (boolean);
}

export interface AssetRootResponse {
  'universeRoots': ({[key: string]: _universerpc_UniverseRoot});
  'hasMore': (boolean);
}
