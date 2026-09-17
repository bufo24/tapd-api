// Original file: protos/taprootassets.proto

import type { AssetSpecifierPartial as _taprpc_AssetSpecifierPartial, AssetSpecifier as _taprpc_AssetSpecifier } from '../taprpc/AssetSpecifier';
import type { Long } from '@grpc/proto-loader';

export interface BurnAssetRequestPartial {
  'assetId'?: (Buffer | Uint8Array | string);
  'assetIdStr'?: (string);
  'amountToBurn'?: (number | string | Long);
  'confirmationText'?: (string);
  'note'?: (string);
  'assetSpecifier'?: (_taprpc_AssetSpecifierPartial | null);
  'asset'?: "assetId"|"assetIdStr";
}

export interface BurnAssetRequest {
  'assetId'?: (Buffer);
  'assetIdStr'?: (string);
  'amountToBurn': (string);
  'confirmationText': (string);
  'note': (string);
  'assetSpecifier': (_taprpc_AssetSpecifier | null);
  'asset': "assetId"|"assetIdStr";
}
