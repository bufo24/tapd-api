// Original file: protos/tapchannelrpc/tapchannel.proto

import type { InvoicePartial as _lnrpc_InvoicePartial, Invoice as _lnrpc_Invoice } from '../lnrpc/Invoice';
import type { HodlInvoicePartial as _tapchannelrpc_HodlInvoicePartial, HodlInvoice as _tapchannelrpc_HodlInvoice } from '../tapchannelrpc/HodlInvoice';
import type { FixedPointPartial as _rfqrpc_FixedPointPartial, FixedPoint as _rfqrpc_FixedPoint } from '../rfqrpc/FixedPoint';
import type { ExecutionPolicyPartial as _rfqrpc_ExecutionPolicyPartial, ExecutionPolicy as _rfqrpc_ExecutionPolicy } from '../rfqrpc/ExecutionPolicy';
import type { Long } from '@grpc/proto-loader';

export interface AddInvoiceRequestPartial {
  'assetId'?: (Buffer | Uint8Array | string);
  'assetAmount'?: (number | string | Long);
  'peerPubkey'?: (Buffer | Uint8Array | string);
  'invoiceRequest'?: (_lnrpc_InvoicePartial | null);
  'hodlInvoice'?: (_tapchannelrpc_HodlInvoicePartial | null);
  'groupKey'?: (Buffer | Uint8Array | string);
  'priceOracleMetadata'?: (string);
  'assetMinAmt'?: (number | string | Long);
  'assetRateLimit'?: (_rfqrpc_FixedPointPartial | null);
  'executionPolicy'?: (_rfqrpc_ExecutionPolicyPartial);
  '_assetMinAmt'?: "assetMinAmt";
}

export interface AddInvoiceRequest {
  'assetId': (Buffer);
  'assetAmount': (string);
  'peerPubkey': (Buffer);
  'invoiceRequest': (_lnrpc_Invoice | null);
  'hodlInvoice': (_tapchannelrpc_HodlInvoice | null);
  'groupKey': (Buffer);
  'priceOracleMetadata': (string);
  'assetMinAmt'?: (string);
  'assetRateLimit': (_rfqrpc_FixedPoint | null);
  'executionPolicy': (_rfqrpc_ExecutionPolicy);
  '_assetMinAmt': "assetMinAmt";
}
