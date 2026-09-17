// Original file: protos/portfoliopilotrpc/portfolio_pilot.proto

import type { QuoteRespStatusPartial as _portfoliopilotrpc_QuoteRespStatusPartial, QuoteRespStatus as _portfoliopilotrpc_QuoteRespStatus } from '../portfoliopilotrpc/QuoteRespStatus';

export interface VerifyAcceptQuoteResponsePartial {
  'status'?: (_portfoliopilotrpc_QuoteRespStatusPartial);
}

export interface VerifyAcceptQuoteResponse {
  'status': (_portfoliopilotrpc_QuoteRespStatus);
}
