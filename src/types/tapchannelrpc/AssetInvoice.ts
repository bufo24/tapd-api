// Original file: protos/tapchannelrpc/tapchannel.proto

import type { InvoicePartial as _lnrpc_InvoicePartial, Invoice as _lnrpc_Invoice } from '../lnrpc/Invoice';
import type { AssetAmountPartial as _tapchannelrpc_AssetAmountPartial, AssetAmount as _tapchannelrpc_AssetAmount } from '../tapchannelrpc/AssetAmount';

export interface AssetInvoicePartial {
  'invoice'?: (_lnrpc_InvoicePartial | null);
  'assetAmounts'?: (_tapchannelrpc_AssetAmountPartial)[];
}

export interface AssetInvoice {
  'invoice': (_lnrpc_Invoice | null);
  'assetAmounts': (_tapchannelrpc_AssetAmount)[];
}
