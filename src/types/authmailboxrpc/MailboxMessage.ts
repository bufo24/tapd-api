// Original file: protos/authmailboxrpc/mailbox.proto

import type { Long } from '@grpc/proto-loader';

export interface MailboxMessagePartial {
  'messageId'?: (number | string | Long);
  'encryptedPayload'?: (Buffer | Uint8Array | string);
  'arrivalTimestamp'?: (number | string | Long);
}

export interface MailboxMessage {
  'messageId': (string);
  'encryptedPayload': (Buffer);
  'arrivalTimestamp': (string);
}
