// Original file: protos/authmailboxrpc/mailbox.proto


export interface ChallengePartial {
  'challengeHash'?: (Buffer | Uint8Array | string);
}

export interface Challenge {
  'challengeHash': (Buffer);
}
