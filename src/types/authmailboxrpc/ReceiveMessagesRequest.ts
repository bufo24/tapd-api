// Original file: protos/authmailboxrpc/mailbox.proto

import type { InitReceivePartial as _authmailboxrpc_InitReceivePartial, InitReceive as _authmailboxrpc_InitReceive } from '../authmailboxrpc/InitReceive';
import type { AuthSignaturePartial as _authmailboxrpc_AuthSignaturePartial, AuthSignature as _authmailboxrpc_AuthSignature } from '../authmailboxrpc/AuthSignature';

export interface ReceiveMessagesRequestPartial {
  'init'?: (_authmailboxrpc_InitReceivePartial | null);
  'authSig'?: (_authmailboxrpc_AuthSignaturePartial | null);
  'requestType'?: "init"|"authSig";
}

export interface ReceiveMessagesRequest {
  'init'?: (_authmailboxrpc_InitReceive | null);
  'authSig'?: (_authmailboxrpc_AuthSignature | null);
  'requestType': "init"|"authSig";
}
