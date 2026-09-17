// Original file: protos/tapchannelrpc/tapchannel.proto

import type { ListInvoiceRequestPartial as _lnrpc_ListInvoiceRequestPartial, ListInvoiceRequest as _lnrpc_ListInvoiceRequest } from '../lnrpc/ListInvoiceRequest';

export interface ListInvoicesRequestPartial {
  'request'?: (_lnrpc_ListInvoiceRequestPartial | null);
}

export interface ListInvoicesRequest {
  'request': (_lnrpc_ListInvoiceRequest | null);
}
