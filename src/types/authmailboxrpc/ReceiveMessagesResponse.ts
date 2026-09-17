// Original file: protos/authmailboxrpc/mailbox.proto

import type { ChallengePartial as _authmailboxrpc_ChallengePartial, Challenge as _authmailboxrpc_Challenge } from '../authmailboxrpc/Challenge';
import type { MailboxMessagesPartial as _authmailboxrpc_MailboxMessagesPartial, MailboxMessages as _authmailboxrpc_MailboxMessages } from '../authmailboxrpc/MailboxMessages';
import type { EndOfStreamPartial as _authmailboxrpc_EndOfStreamPartial, EndOfStream as _authmailboxrpc_EndOfStream } from '../authmailboxrpc/EndOfStream';

export interface ReceiveMessagesResponsePartial {
  'challenge'?: (_authmailboxrpc_ChallengePartial | null);
  'authSuccess'?: (boolean);
  'messages'?: (_authmailboxrpc_MailboxMessagesPartial | null);
  'eos'?: (_authmailboxrpc_EndOfStreamPartial | null);
  'responseType'?: "challenge"|"authSuccess"|"messages"|"eos";
}

export interface ReceiveMessagesResponse {
  'challenge'?: (_authmailboxrpc_Challenge | null);
  'authSuccess'?: (boolean);
  'messages'?: (_authmailboxrpc_MailboxMessages | null);
  'eos'?: (_authmailboxrpc_EndOfStream | null);
  'responseType': "challenge"|"authSuccess"|"messages"|"eos";
}
