// Original file: protos/authmailboxrpc/mailbox.proto

import type { Long } from '@grpc/proto-loader';

export interface MailboxInfoResponsePartial {
  'serverTime'?: (number | string | Long);
  'messageCount'?: (number | string | Long);
}

export interface MailboxInfoResponse {
  'serverTime': (string);
  'messageCount': (string);
}
