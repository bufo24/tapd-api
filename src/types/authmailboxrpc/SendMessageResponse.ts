// Original file: protos/authmailboxrpc/mailbox.proto

import type { Long } from '@grpc/proto-loader';

export interface SendMessageResponsePartial {
  'messageId'?: (number | string | Long);
}

export interface SendMessageResponse {
  'messageId': (string);
}
