// Original file: protos/authmailboxrpc/mailbox.proto

import type { Long } from '@grpc/proto-loader';

export interface RemoveMessageRequestPartial {
  'receiverId'?: (Buffer | Uint8Array | string);
  'messageIds'?: (number | string | Long)[];
  'signature'?: (Buffer | Uint8Array | string);
}

export interface RemoveMessageRequest {
  'receiverId': (Buffer);
  'messageIds': (string)[];
  'signature': (Buffer);
}
