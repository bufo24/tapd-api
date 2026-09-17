// Original file: protos/taprootassets.proto

import type { AssetSpecifierPartial as _taprpc_AssetSpecifierPartial, AssetSpecifier as _taprpc_AssetSpecifier } from '../taprpc/AssetSpecifier';
import type { ScriptKeyTypeQueryPartial as _taprpc_ScriptKeyTypeQueryPartial, ScriptKeyTypeQuery as _taprpc_ScriptKeyTypeQuery } from '../taprpc/ScriptKeyTypeQuery';

export interface FetchAssetRequestPartial {
  'assetSpecifier'?: (_taprpc_AssetSpecifierPartial | null);
  'withWitness'?: (boolean);
  'includeSpent'?: (boolean);
  'includeLeased'?: (boolean);
  'includeUnconfirmedMints'?: (boolean);
  'scriptKeyType'?: (_taprpc_ScriptKeyTypeQueryPartial | null);
}

export interface FetchAssetRequest {
  'assetSpecifier': (_taprpc_AssetSpecifier | null);
  'withWitness': (boolean);
  'includeSpent': (boolean);
  'includeLeased': (boolean);
  'includeUnconfirmedMints': (boolean);
  'scriptKeyType': (_taprpc_ScriptKeyTypeQuery | null);
}
