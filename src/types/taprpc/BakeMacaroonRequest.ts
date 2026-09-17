// Original file: protos/taprootassets.proto

import type { MacaroonPermissionPartial as _taprpc_MacaroonPermissionPartial, MacaroonPermission as _taprpc_MacaroonPermission } from '../taprpc/MacaroonPermission';
import type { Long } from '@grpc/proto-loader';

export interface BakeMacaroonRequestPartial {
  'permissions'?: (_taprpc_MacaroonPermissionPartial)[];
  'rootKeyId'?: (number | string | Long);
  'allowExternalPermissions'?: (boolean);
}

export interface BakeMacaroonRequest {
  'permissions': (_taprpc_MacaroonPermission)[];
  'rootKeyId': (string);
  'allowExternalPermissions': (boolean);
}
