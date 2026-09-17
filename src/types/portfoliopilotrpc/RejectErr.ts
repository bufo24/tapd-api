// Original file: protos/portfoliopilotrpc/portfolio_pilot.proto

import type { RejectCodePartial as _portfoliopilotrpc_RejectCodePartial, RejectCode as _portfoliopilotrpc_RejectCode } from '../portfoliopilotrpc/RejectCode';

export interface RejectErrPartial {
  'code'?: (_portfoliopilotrpc_RejectCodePartial);
  'message'?: (string);
}

export interface RejectErr {
  'code': (_portfoliopilotrpc_RejectCode);
  'message': (string);
}
