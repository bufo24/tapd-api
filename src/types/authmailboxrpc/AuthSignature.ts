// Original file: protos/authmailboxrpc/mailbox.proto


export interface AuthSignaturePartial {
  'signature'?: (Buffer | Uint8Array | string);
}

export interface AuthSignature {
  'signature': (Buffer);
}
