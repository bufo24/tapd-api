// Original file: protos/universerpc/universe.proto

import type { IDPartial as _universerpc_IDPartial, ID as _universerpc_ID } from '../universerpc/ID';
import type { SortDirectionPartial as _taprpc_SortDirectionPartial, SortDirection as _taprpc_SortDirection } from '../taprpc/SortDirection';

export interface AssetLeafKeysRequestPartial {
  'id'?: (_universerpc_IDPartial | null);
  'offset'?: (number);
  'limit'?: (number);
  'direction'?: (_taprpc_SortDirectionPartial);
}

export interface AssetLeafKeysRequest {
  'id': (_universerpc_ID | null);
  'offset': (number);
  'limit': (number);
  'direction': (_taprpc_SortDirection);
}
