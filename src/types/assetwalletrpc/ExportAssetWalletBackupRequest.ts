// Original file: protos/assetwalletrpc/assetwallet.proto

import type { BackupModePartial as _assetwalletrpc_BackupModePartial, BackupMode as _assetwalletrpc_BackupMode } from '../assetwalletrpc/BackupMode';

export interface ExportAssetWalletBackupRequestPartial {
  'mode'?: (_assetwalletrpc_BackupModePartial);
}

export interface ExportAssetWalletBackupRequest {
  'mode': (_assetwalletrpc_BackupMode);
}
