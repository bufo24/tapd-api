// Original file: protos/authmailboxrpc/mailbox.proto

import type { MerkleProofPartial as _authmailboxrpc_MerkleProofPartial, MerkleProof as _authmailboxrpc_MerkleProof } from '../authmailboxrpc/MerkleProof';
import type { OutPointPartial as _taprpc_OutPointPartial, OutPoint as _taprpc_OutPoint } from '../taprpc/OutPoint';

export interface BitcoinMerkleInclusionProofPartial {
  'rawTxData'?: (Buffer | Uint8Array | string);
  'rawBlockHeaderData'?: (Buffer | Uint8Array | string);
  'blockHeight'?: (number);
  'merkleProof'?: (_authmailboxrpc_MerkleProofPartial | null);
  'claimedOutpoint'?: (_taprpc_OutPointPartial | null);
  'internalKey'?: (Buffer | Uint8Array | string);
  'merkleRoot'?: (Buffer | Uint8Array | string);
}

export interface BitcoinMerkleInclusionProof {
  'rawTxData': (Buffer);
  'rawBlockHeaderData': (Buffer);
  'blockHeight': (number);
  'merkleProof': (_authmailboxrpc_MerkleProof | null);
  'claimedOutpoint': (_taprpc_OutPoint | null);
  'internalKey': (Buffer);
  'merkleRoot': (Buffer);
}
