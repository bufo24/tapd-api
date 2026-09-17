// Original file: protos/assetwalletrpc/assetwallet.proto

import type { TransitionProofVersionPartial as _assetwalletrpc_TransitionProofVersionPartial, TransitionProofVersion as _assetwalletrpc_TransitionProofVersion } from '../assetwalletrpc/TransitionProofVersion';
import type { Long } from '@grpc/proto-loader';

export interface CommitVirtualPsbtsRequestPartial {
  'virtualPsbts'?: (Buffer | Uint8Array | string)[];
  'passiveAssetPsbts'?: (Buffer | Uint8Array | string)[];
  'anchorPsbt'?: (Buffer | Uint8Array | string);
  'existingOutputIndex'?: (number);
  'add'?: (boolean);
  'targetConf'?: (number);
  'satPerVbyte'?: (number | string | Long);
  'customLockId'?: (Buffer | Uint8Array | string);
  'lockExpirationSeconds'?: (number | string | Long);
  'skipFunding'?: (boolean);
  'transitionProofVersion'?: (_assetwalletrpc_TransitionProofVersionPartial);
  'anchorChangeOutput'?: "existingOutputIndex"|"add";
  'fees'?: "targetConf"|"satPerVbyte";
}

export interface CommitVirtualPsbtsRequest {
  'virtualPsbts': (Buffer)[];
  'passiveAssetPsbts': (Buffer)[];
  'anchorPsbt': (Buffer);
  'existingOutputIndex'?: (number);
  'add'?: (boolean);
  'targetConf'?: (number);
  'satPerVbyte'?: (string);
  'customLockId': (Buffer);
  'lockExpirationSeconds': (string);
  'skipFunding': (boolean);
  'transitionProofVersion': (_assetwalletrpc_TransitionProofVersion);
  'anchorChangeOutput': "existingOutputIndex"|"add";
  'fees': "targetConf"|"satPerVbyte";
}
