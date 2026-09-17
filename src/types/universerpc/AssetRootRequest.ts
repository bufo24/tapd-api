// Original file: protos/universerpc/universe.proto

import type { SortDirectionPartial as _taprpc_SortDirectionPartial, SortDirection as _taprpc_SortDirection } from '../taprpc/SortDirection';

export interface AssetRootRequestPartial {
  'withAmountsById'?: (boolean);
  'offset'?: (number);
  'limit'?: (number);
  'direction'?: (_taprpc_SortDirectionPartial);
}

export interface AssetRootRequest {
  'withAmountsById': (boolean);
  'offset': (number);
  'limit': (number);
  'direction': (_taprpc_SortDirection);
}
