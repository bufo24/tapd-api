// Original file: protos/authmailboxrpc/mailbox.proto

import type { Long } from '@grpc/proto-loader';

export interface InitReceivePartial {
  'receiverId'?: (Buffer | Uint8Array | string);
  'startMessageIdExclusive'?: (number | string | Long);
  'startBlockHeightInclusive'?: (number);
  'startTimestampExclusive'?: (number | string | Long);
}

export interface InitReceive {
  'receiverId': (Buffer);
  'startMessageIdExclusive': (string);
  'startBlockHeightInclusive': (number);
  'startTimestampExclusive': (string);
}
