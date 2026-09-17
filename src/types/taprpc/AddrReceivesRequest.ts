// Original file: protos/taprootassets.proto

import type { AddrEventStatusPartial as _taprpc_AddrEventStatusPartial, AddrEventStatus as _taprpc_AddrEventStatus } from '../taprpc/AddrEventStatus';
import type { SortDirectionPartial as _taprpc_SortDirectionPartial, SortDirection as _taprpc_SortDirection } from '../taprpc/SortDirection';
import type { Long } from '@grpc/proto-loader';

export interface AddrReceivesRequestPartial {
  'filterAddr'?: (string);
  'filterStatus'?: (_taprpc_AddrEventStatusPartial);
  'startTimestamp'?: (number | string | Long);
  'endTimestamp'?: (number | string | Long);
  'offset'?: (number);
  'limit'?: (number);
  'direction'?: (_taprpc_SortDirectionPartial);
}

export interface AddrReceivesRequest {
  'filterAddr': (string);
  'filterStatus': (_taprpc_AddrEventStatus);
  'startTimestamp': (string);
  'endTimestamp': (string);
  'offset': (number);
  'limit': (number);
  'direction': (_taprpc_SortDirection);
}
