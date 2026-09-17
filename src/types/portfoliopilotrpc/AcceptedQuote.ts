// Original file: protos/portfoliopilotrpc/portfolio_pilot.proto

import type { AssetRatePartial as _portfoliopilotrpc_AssetRatePartial, AssetRate as _portfoliopilotrpc_AssetRate } from '../portfoliopilotrpc/AssetRate';
import type { BuyRequestPartial as _portfoliopilotrpc_BuyRequestPartial, BuyRequest as _portfoliopilotrpc_BuyRequest } from '../portfoliopilotrpc/BuyRequest';
import type { SellRequestPartial as _portfoliopilotrpc_SellRequestPartial, SellRequest as _portfoliopilotrpc_SellRequest } from '../portfoliopilotrpc/SellRequest';
import type { Long } from '@grpc/proto-loader';

export interface AcceptedQuotePartial {
  'peerId'?: (Buffer | Uint8Array | string);
  'acceptedRate'?: (_portfoliopilotrpc_AssetRatePartial | null);
  'buyRequest'?: (_portfoliopilotrpc_BuyRequestPartial | null);
  'sellRequest'?: (_portfoliopilotrpc_SellRequestPartial | null);
  'acceptedMaxAmount'?: (number | string | Long);
  'request'?: "buyRequest"|"sellRequest";
}

export interface AcceptedQuote {
  'peerId': (Buffer);
  'acceptedRate': (_portfoliopilotrpc_AssetRate | null);
  'buyRequest'?: (_portfoliopilotrpc_BuyRequest | null);
  'sellRequest'?: (_portfoliopilotrpc_SellRequest | null);
  'acceptedMaxAmount': (string);
  'request': "buyRequest"|"sellRequest";
}
