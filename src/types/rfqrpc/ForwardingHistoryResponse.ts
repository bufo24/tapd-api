// Original file: protos/rfqrpc/rfq.proto

import type { ForwardingEventPartial as _rfqrpc_ForwardingEventPartial, ForwardingEvent as _rfqrpc_ForwardingEvent } from '../rfqrpc/ForwardingEvent';
import type { Long } from '@grpc/proto-loader';

export interface ForwardingHistoryResponsePartial {
  'forwards'?: (_rfqrpc_ForwardingEventPartial)[];
  'totalCount'?: (number | string | Long);
}

export interface ForwardingHistoryResponse {
  'forwards': (_rfqrpc_ForwardingEvent)[];
  'totalCount': (string);
}
