// Original file: protos/authmailboxrpc/mailbox.proto

import type { BitcoinMerkleInclusionProofPartial as _authmailboxrpc_BitcoinMerkleInclusionProofPartial, BitcoinMerkleInclusionProof as _authmailboxrpc_BitcoinMerkleInclusionProof } from '../authmailboxrpc/BitcoinMerkleInclusionProof';

export interface SendMessageRequestPartial {
  'receiverId'?: (Buffer | Uint8Array | string);
  'encryptedPayload'?: (Buffer | Uint8Array | string);
  'txProof'?: (_authmailboxrpc_BitcoinMerkleInclusionProofPartial | null);
  'proof'?: "txProof";
}

export interface SendMessageRequest {
  'receiverId': (Buffer);
  'encryptedPayload': (Buffer);
  'txProof'?: (_authmailboxrpc_BitcoinMerkleInclusionProof | null);
  'proof': "txProof";
}
