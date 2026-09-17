// Original file: protos/assetwalletrpc/assetwallet.proto


export interface ExportAssetWalletBackupResponsePartial {
  'backup'?: (Buffer | Uint8Array | string);
}

export interface ExportAssetWalletBackupResponse {
  'backup': (Buffer);
}
