// Original file: protos/portfoliopilotrpc/portfolio_pilot.proto

import type { AssetRatePartial as _portfoliopilotrpc_AssetRatePartial, AssetRate as _portfoliopilotrpc_AssetRate } from '../portfoliopilotrpc/AssetRate';
import type { RejectErrPartial as _portfoliopilotrpc_RejectErrPartial, RejectErr as _portfoliopilotrpc_RejectErr } from '../portfoliopilotrpc/RejectErr';
import type { Long } from '@grpc/proto-loader';

export interface ResolveRequestResponsePartial {
  'accept'?: (_portfoliopilotrpc_AssetRatePartial | null);
  'reject'?: (_portfoliopilotrpc_RejectErrPartial | null);
  'acceptedMaxAmount'?: (number | string | Long);
  'result'?: "accept"|"reject";
}

export interface ResolveRequestResponse {
  'accept'?: (_portfoliopilotrpc_AssetRate | null);
  'reject'?: (_portfoliopilotrpc_RejectErr | null);
  'acceptedMaxAmount': (string);
  'result': "accept"|"reject";
}
