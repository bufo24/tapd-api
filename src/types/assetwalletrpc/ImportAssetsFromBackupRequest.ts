// Original file: protos/assetwalletrpc/assetwallet.proto


export interface ImportAssetsFromBackupRequestPartial {
  'backup'?: (Buffer | Uint8Array | string);
}

export interface ImportAssetsFromBackupRequest {
  'backup': (Buffer);
}
