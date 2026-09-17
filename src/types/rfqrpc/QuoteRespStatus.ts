// Original file: protos/rfqrpc/rfq.proto

export const QuoteRespStatus = {
  INVALID_ASSET_RATES: 'INVALID_ASSET_RATES',
  INVALID_EXPIRY: 'INVALID_EXPIRY',
  PRICE_ORACLE_QUERY_ERR: 'PRICE_ORACLE_QUERY_ERR',
  PORTFOLIO_PILOT_ERR: 'PORTFOLIO_PILOT_ERR',
  VALID_ACCEPT_QUOTE: 'VALID_ACCEPT_QUOTE',
  MIN_FILL_NOT_MET: 'MIN_FILL_NOT_MET',
  RATE_BOUND_MISS: 'RATE_BOUND_MISS',
  FOK_NOT_VIABLE: 'FOK_NOT_VIABLE',
} as const;

export type QuoteRespStatusPartial =
  | 'INVALID_ASSET_RATES'
  | 0
  | 'INVALID_EXPIRY'
  | 1
  | 'PRICE_ORACLE_QUERY_ERR'
  | 2
  | 'PORTFOLIO_PILOT_ERR'
  | 3
  | 'VALID_ACCEPT_QUOTE'
  | 4
  | 'MIN_FILL_NOT_MET'
  | 5
  | 'RATE_BOUND_MISS'
  | 6
  | 'FOK_NOT_VIABLE'
  | 7

export type QuoteRespStatus = typeof QuoteRespStatus[keyof typeof QuoteRespStatus]
