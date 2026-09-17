import type * as grpc from '@grpc/grpc-js';
import type { EnumTypeDefinition, MessageTypeDefinition } from '@grpc/proto-loader';

import type { MailboxClient as _authmailboxrpc_MailboxClient, MailboxDefinition as _authmailboxrpc_MailboxDefinition } from './authmailboxrpc/Mailbox';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  authmailboxrpc: {
    AuthSignature: MessageTypeDefinition
    BitcoinMerkleInclusionProof: MessageTypeDefinition
    Challenge: MessageTypeDefinition
    EndOfStream: MessageTypeDefinition
    InitReceive: MessageTypeDefinition
    Mailbox: SubtypeConstructor<typeof grpc.Client, _authmailboxrpc_MailboxClient> & { service: _authmailboxrpc_MailboxDefinition }
    MailboxInfoRequest: MessageTypeDefinition
    MailboxInfoResponse: MessageTypeDefinition
    MailboxMessage: MessageTypeDefinition
    MailboxMessages: MessageTypeDefinition
    MerkleProof: MessageTypeDefinition
    ReceiveMessagesRequest: MessageTypeDefinition
    ReceiveMessagesResponse: MessageTypeDefinition
    RemoveMessageRequest: MessageTypeDefinition
    RemoveMessageResponse: MessageTypeDefinition
    SendMessageRequest: MessageTypeDefinition
    SendMessageResponse: MessageTypeDefinition
  }
  taprpc: {
    AssetOutPoint: MessageTypeDefinition
    OutPoint: MessageTypeDefinition
    SortDirection: EnumTypeDefinition
  }
}

