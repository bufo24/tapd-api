// Original file: protos/authmailboxrpc/mailbox.proto

import type { Long } from '@grpc/proto-loader';

export interface RemoveMessageResponsePartial {
  'numRemoved'?: (number | string | Long);
}

export interface RemoveMessageResponse {
  'numRemoved': (string);
}
