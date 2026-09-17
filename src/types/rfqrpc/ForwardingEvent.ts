// Original file: protos/rfqrpc/rfq.proto

import type { RfqPolicyTypePartial as _rfqrpc_RfqPolicyTypePartial, RfqPolicyType as _rfqrpc_RfqPolicyType } from '../rfqrpc/RfqPolicyType';
import type { AssetSpecPartial as _rfqrpc_AssetSpecPartial, AssetSpec as _rfqrpc_AssetSpec } from '../rfqrpc/AssetSpec';
import type { FixedPointPartial as _rfqrpc_FixedPointPartial, FixedPoint as _rfqrpc_FixedPoint } from '../rfqrpc/FixedPoint';
import type { Long } from '@grpc/proto-loader';

export interface ForwardingEventPartial {
  'rfqId'?: (Buffer | Uint8Array | string);
  'chanIdIn'?: (number | string | Long);
  'chanIdOut'?: (number | string | Long);
  'htlcId'?: (number | string | Long);
  'openedAt'?: (number | string | Long);
  'settledAt'?: (number | string | Long);
  'failedAt'?: (number | string | Long);
  'assetAmt'?: (number | string | Long);
  'amtInMsat'?: (number | string | Long);
  'amtOutMsat'?: (number | string | Long);
  'policyType'?: (_rfqrpc_RfqPolicyTypePartial);
  'peer'?: (string);
  'assetSpec'?: (_rfqrpc_AssetSpecPartial | null);
  'rate'?: (_rfqrpc_FixedPointPartial | null);
}

export interface ForwardingEvent {
  'rfqId': (Buffer);
  'chanIdIn': (string);
  'chanIdOut': (string);
  'htlcId': (string);
  'openedAt': (string);
  'settledAt': (string);
  'failedAt': (string);
  'assetAmt': (string);
  'amtInMsat': (string);
  'amtOutMsat': (string);
  'policyType': (_rfqrpc_RfqPolicyType);
  'peer': (string);
  'assetSpec': (_rfqrpc_AssetSpec | null);
  'rate': (_rfqrpc_FixedPoint | null);
}
