// Original file: protos/tapchannelrpc/tapchannel.proto

import type { TrackPaymentsRequestPartial as _routerrpc_TrackPaymentsRequestPartial, TrackPaymentsRequest as _routerrpc_TrackPaymentsRequest } from '../routerrpc/TrackPaymentsRequest';

export interface SubscribePaymentsRequestPartial {
  'request'?: (_routerrpc_TrackPaymentsRequestPartial | null);
}

export interface SubscribePaymentsRequest {
  'request': (_routerrpc_TrackPaymentsRequest | null);
}
