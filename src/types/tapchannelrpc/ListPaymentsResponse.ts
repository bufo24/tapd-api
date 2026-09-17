// Original file: protos/tapchannelrpc/tapchannel.proto

import type { AssetPaymentPartial as _tapchannelrpc_AssetPaymentPartial, AssetPayment as _tapchannelrpc_AssetPayment } from '../tapchannelrpc/AssetPayment';
import type { Long } from '@grpc/proto-loader';

export interface ListPaymentsResponsePartial {
  'payments'?: (_tapchannelrpc_AssetPaymentPartial)[];
  'firstIndexOffset'?: (number | string | Long);
  'lastIndexOffset'?: (number | string | Long);
}

export interface ListPaymentsResponse {
  'payments': (_tapchannelrpc_AssetPayment)[];
  'firstIndexOffset': (string);
  'lastIndexOffset': (string);
}
