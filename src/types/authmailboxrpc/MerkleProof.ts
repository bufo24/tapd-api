// Original file: protos/authmailboxrpc/mailbox.proto


export interface MerkleProofPartial {
  'siblingHashes'?: (Buffer | Uint8Array | string)[];
  'bits'?: (boolean)[];
}

export interface MerkleProof {
  'siblingHashes': (Buffer)[];
  'bits': (boolean)[];
}
