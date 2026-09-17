// Original file: protos/tapchannelrpc/tapchannel.proto

import type { AssetInvoicePartial as _tapchannelrpc_AssetInvoicePartial, AssetInvoice as _tapchannelrpc_AssetInvoice } from '../tapchannelrpc/AssetInvoice';
import type { Long } from '@grpc/proto-loader';

export interface ListInvoicesResponsePartial {
  'invoices'?: (_tapchannelrpc_AssetInvoicePartial)[];
  'lastIndexOffset'?: (number | string | Long);
  'firstIndexOffset'?: (number | string | Long);
}

export interface ListInvoicesResponse {
  'invoices': (_tapchannelrpc_AssetInvoice)[];
  'lastIndexOffset': (string);
  'firstIndexOffset': (string);
}
