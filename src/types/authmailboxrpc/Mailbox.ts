// Original file: protos/authmailboxrpc/mailbox.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { MailboxInfoRequestPartial as _authmailboxrpc_MailboxInfoRequestPartial, MailboxInfoRequest as _authmailboxrpc_MailboxInfoRequest } from '../authmailboxrpc/MailboxInfoRequest';
import type { MailboxInfoResponsePartial as _authmailboxrpc_MailboxInfoResponsePartial, MailboxInfoResponse as _authmailboxrpc_MailboxInfoResponse } from '../authmailboxrpc/MailboxInfoResponse';
import type { ReceiveMessagesRequestPartial as _authmailboxrpc_ReceiveMessagesRequestPartial, ReceiveMessagesRequest as _authmailboxrpc_ReceiveMessagesRequest } from '../authmailboxrpc/ReceiveMessagesRequest';
import type { ReceiveMessagesResponsePartial as _authmailboxrpc_ReceiveMessagesResponsePartial, ReceiveMessagesResponse as _authmailboxrpc_ReceiveMessagesResponse } from '../authmailboxrpc/ReceiveMessagesResponse';
import type { RemoveMessageRequestPartial as _authmailboxrpc_RemoveMessageRequestPartial, RemoveMessageRequest as _authmailboxrpc_RemoveMessageRequest } from '../authmailboxrpc/RemoveMessageRequest';
import type { RemoveMessageResponsePartial as _authmailboxrpc_RemoveMessageResponsePartial, RemoveMessageResponse as _authmailboxrpc_RemoveMessageResponse } from '../authmailboxrpc/RemoveMessageResponse';
import type { SendMessageRequestPartial as _authmailboxrpc_SendMessageRequestPartial, SendMessageRequest as _authmailboxrpc_SendMessageRequest } from '../authmailboxrpc/SendMessageRequest';
import type { SendMessageResponsePartial as _authmailboxrpc_SendMessageResponsePartial, SendMessageResponse as _authmailboxrpc_SendMessageResponse } from '../authmailboxrpc/SendMessageResponse';

export interface MailboxClient extends grpc.Client {
  MailboxInfo(argument: _authmailboxrpc_MailboxInfoRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_authmailboxrpc_MailboxInfoResponse>): grpc.ClientUnaryCall;
  MailboxInfo(argument: _authmailboxrpc_MailboxInfoRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_authmailboxrpc_MailboxInfoResponse>): grpc.ClientUnaryCall;
  MailboxInfo(argument: _authmailboxrpc_MailboxInfoRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_authmailboxrpc_MailboxInfoResponse>): grpc.ClientUnaryCall;
  MailboxInfo(argument: _authmailboxrpc_MailboxInfoRequestPartial, callback: grpc.requestCallback<_authmailboxrpc_MailboxInfoResponse>): grpc.ClientUnaryCall;
  mailboxInfo(argument: _authmailboxrpc_MailboxInfoRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_authmailboxrpc_MailboxInfoResponse>): grpc.ClientUnaryCall;
  mailboxInfo(argument: _authmailboxrpc_MailboxInfoRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_authmailboxrpc_MailboxInfoResponse>): grpc.ClientUnaryCall;
  mailboxInfo(argument: _authmailboxrpc_MailboxInfoRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_authmailboxrpc_MailboxInfoResponse>): grpc.ClientUnaryCall;
  mailboxInfo(argument: _authmailboxrpc_MailboxInfoRequestPartial, callback: grpc.requestCallback<_authmailboxrpc_MailboxInfoResponse>): grpc.ClientUnaryCall;
  
  ReceiveMessages(metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientDuplexStream<_authmailboxrpc_ReceiveMessagesRequestPartial, _authmailboxrpc_ReceiveMessagesResponse>;
  ReceiveMessages(options?: grpc.CallOptions): grpc.ClientDuplexStream<_authmailboxrpc_ReceiveMessagesRequestPartial, _authmailboxrpc_ReceiveMessagesResponse>;
  receiveMessages(metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientDuplexStream<_authmailboxrpc_ReceiveMessagesRequestPartial, _authmailboxrpc_ReceiveMessagesResponse>;
  receiveMessages(options?: grpc.CallOptions): grpc.ClientDuplexStream<_authmailboxrpc_ReceiveMessagesRequestPartial, _authmailboxrpc_ReceiveMessagesResponse>;
  
  RemoveMessage(argument: _authmailboxrpc_RemoveMessageRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_authmailboxrpc_RemoveMessageResponse>): grpc.ClientUnaryCall;
  RemoveMessage(argument: _authmailboxrpc_RemoveMessageRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_authmailboxrpc_RemoveMessageResponse>): grpc.ClientUnaryCall;
  RemoveMessage(argument: _authmailboxrpc_RemoveMessageRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_authmailboxrpc_RemoveMessageResponse>): grpc.ClientUnaryCall;
  RemoveMessage(argument: _authmailboxrpc_RemoveMessageRequestPartial, callback: grpc.requestCallback<_authmailboxrpc_RemoveMessageResponse>): grpc.ClientUnaryCall;
  removeMessage(argument: _authmailboxrpc_RemoveMessageRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_authmailboxrpc_RemoveMessageResponse>): grpc.ClientUnaryCall;
  removeMessage(argument: _authmailboxrpc_RemoveMessageRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_authmailboxrpc_RemoveMessageResponse>): grpc.ClientUnaryCall;
  removeMessage(argument: _authmailboxrpc_RemoveMessageRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_authmailboxrpc_RemoveMessageResponse>): grpc.ClientUnaryCall;
  removeMessage(argument: _authmailboxrpc_RemoveMessageRequestPartial, callback: grpc.requestCallback<_authmailboxrpc_RemoveMessageResponse>): grpc.ClientUnaryCall;
  
  SendMessage(argument: _authmailboxrpc_SendMessageRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_authmailboxrpc_SendMessageResponse>): grpc.ClientUnaryCall;
  SendMessage(argument: _authmailboxrpc_SendMessageRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_authmailboxrpc_SendMessageResponse>): grpc.ClientUnaryCall;
  SendMessage(argument: _authmailboxrpc_SendMessageRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_authmailboxrpc_SendMessageResponse>): grpc.ClientUnaryCall;
  SendMessage(argument: _authmailboxrpc_SendMessageRequestPartial, callback: grpc.requestCallback<_authmailboxrpc_SendMessageResponse>): grpc.ClientUnaryCall;
  sendMessage(argument: _authmailboxrpc_SendMessageRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_authmailboxrpc_SendMessageResponse>): grpc.ClientUnaryCall;
  sendMessage(argument: _authmailboxrpc_SendMessageRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_authmailboxrpc_SendMessageResponse>): grpc.ClientUnaryCall;
  sendMessage(argument: _authmailboxrpc_SendMessageRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_authmailboxrpc_SendMessageResponse>): grpc.ClientUnaryCall;
  sendMessage(argument: _authmailboxrpc_SendMessageRequestPartial, callback: grpc.requestCallback<_authmailboxrpc_SendMessageResponse>): grpc.ClientUnaryCall;
  
}

export interface MailboxHandlers extends grpc.UntypedServiceImplementation {
  MailboxInfo: grpc.handleUnaryCall<_authmailboxrpc_MailboxInfoRequest, _authmailboxrpc_MailboxInfoResponsePartial>;
  
  ReceiveMessages: grpc.handleBidiStreamingCall<_authmailboxrpc_ReceiveMessagesRequest, _authmailboxrpc_ReceiveMessagesResponsePartial>;
  
  RemoveMessage: grpc.handleUnaryCall<_authmailboxrpc_RemoveMessageRequest, _authmailboxrpc_RemoveMessageResponsePartial>;
  
  SendMessage: grpc.handleUnaryCall<_authmailboxrpc_SendMessageRequest, _authmailboxrpc_SendMessageResponsePartial>;
  
}

export interface MailboxDefinition extends grpc.ServiceDefinition {
  MailboxInfo: MethodDefinition<_authmailboxrpc_MailboxInfoRequestPartial, _authmailboxrpc_MailboxInfoResponsePartial, _authmailboxrpc_MailboxInfoRequest, _authmailboxrpc_MailboxInfoResponse>
  ReceiveMessages: MethodDefinition<_authmailboxrpc_ReceiveMessagesRequestPartial, _authmailboxrpc_ReceiveMessagesResponsePartial, _authmailboxrpc_ReceiveMessagesRequest, _authmailboxrpc_ReceiveMessagesResponse>
  RemoveMessage: MethodDefinition<_authmailboxrpc_RemoveMessageRequestPartial, _authmailboxrpc_RemoveMessageResponsePartial, _authmailboxrpc_RemoveMessageRequest, _authmailboxrpc_RemoveMessageResponse>
  SendMessage: MethodDefinition<_authmailboxrpc_SendMessageRequestPartial, _authmailboxrpc_SendMessageResponsePartial, _authmailboxrpc_SendMessageRequest, _authmailboxrpc_SendMessageResponse>
}
