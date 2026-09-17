// Original file: protos/authmailboxrpc/mailbox.proto

import type { MailboxMessagePartial as _authmailboxrpc_MailboxMessagePartial, MailboxMessage as _authmailboxrpc_MailboxMessage } from '../authmailboxrpc/MailboxMessage';

export interface MailboxMessagesPartial {
  'messages'?: (_authmailboxrpc_MailboxMessagePartial)[];
}

export interface MailboxMessages {
  'messages': (_authmailboxrpc_MailboxMessage)[];
}
