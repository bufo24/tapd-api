// Original file: protos/portfoliopilotrpc/portfolio_pilot.proto

import type { AcceptedQuotePartial as _portfoliopilotrpc_AcceptedQuotePartial, AcceptedQuote as _portfoliopilotrpc_AcceptedQuote } from '../portfoliopilotrpc/AcceptedQuote';

export interface VerifyAcceptQuoteRequestPartial {
  'accept'?: (_portfoliopilotrpc_AcceptedQuotePartial | null);
}

export interface VerifyAcceptQuoteRequest {
  'accept': (_portfoliopilotrpc_AcceptedQuote | null);
}
