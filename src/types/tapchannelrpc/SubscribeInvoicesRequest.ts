// Original file: protos/tapchannelrpc/tapchannel.proto

import type { InvoiceSubscriptionPartial as _lnrpc_InvoiceSubscriptionPartial, InvoiceSubscription as _lnrpc_InvoiceSubscription } from '../lnrpc/InvoiceSubscription';

export interface SubscribeInvoicesRequestPartial {
  'request'?: (_lnrpc_InvoiceSubscriptionPartial | null);
}

export interface SubscribeInvoicesRequest {
  'request': (_lnrpc_InvoiceSubscription | null);
}
