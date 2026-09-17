// Original file: protos/taprootassets.proto

import type { ScriptKeyPartial as _taprpc_ScriptKeyPartial, ScriptKey as _taprpc_ScriptKey } from '../taprpc/ScriptKey';
import type { OutPointPartial as _taprpc_OutPointPartial, OutPoint as _taprpc_OutPoint } from '../taprpc/OutPoint';
import type { ScriptKeyTypeQueryPartial as _taprpc_ScriptKeyTypeQueryPartial, ScriptKeyTypeQuery as _taprpc_ScriptKeyTypeQuery } from '../taprpc/ScriptKeyTypeQuery';
import type { SortDirectionPartial as _taprpc_SortDirectionPartial, SortDirection as _taprpc_SortDirection } from '../taprpc/SortDirection';
import type { Long } from '@grpc/proto-loader';

export interface ListAssetRequestPartial {
  'withWitness'?: (boolean);
  'includeSpent'?: (boolean);
  'includeLeased'?: (boolean);
  'includeUnconfirmedMints'?: (boolean);
  'minAmount'?: (number | string | Long);
  'maxAmount'?: (number | string | Long);
  'groupKey'?: (Buffer | Uint8Array | string);
  'scriptKey'?: (_taprpc_ScriptKeyPartial | null);
  'anchorOutpoint'?: (_taprpc_OutPointPartial | null);
  'scriptKeyType'?: (_taprpc_ScriptKeyTypeQueryPartial | null);
  'offset'?: (number);
  'limit'?: (number);
  'direction'?: (_taprpc_SortDirectionPartial);
}

export interface ListAssetRequest {
  'withWitness': (boolean);
  'includeSpent': (boolean);
  'includeLeased': (boolean);
  'includeUnconfirmedMints': (boolean);
  'minAmount': (string);
  'maxAmount': (string);
  'groupKey': (Buffer);
  'scriptKey': (_taprpc_ScriptKey | null);
  'anchorOutpoint': (_taprpc_OutPoint | null);
  'scriptKeyType': (_taprpc_ScriptKeyTypeQuery | null);
  'offset': (number);
  'limit': (number);
  'direction': (_taprpc_SortDirection);
}
