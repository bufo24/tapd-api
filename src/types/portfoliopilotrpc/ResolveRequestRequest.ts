// Original file: protos/portfoliopilotrpc/portfolio_pilot.proto

import type { BuyRequestPartial as _portfoliopilotrpc_BuyRequestPartial, BuyRequest as _portfoliopilotrpc_BuyRequest } from '../portfoliopilotrpc/BuyRequest';
import type { SellRequestPartial as _portfoliopilotrpc_SellRequestPartial, SellRequest as _portfoliopilotrpc_SellRequest } from '../portfoliopilotrpc/SellRequest';

export interface ResolveRequestRequestPartial {
  'buyRequest'?: (_portfoliopilotrpc_BuyRequestPartial | null);
  'sellRequest'?: (_portfoliopilotrpc_SellRequestPartial | null);
  'request'?: "buyRequest"|"sellRequest";
}

export interface ResolveRequestRequest {
  'buyRequest'?: (_portfoliopilotrpc_BuyRequest | null);
  'sellRequest'?: (_portfoliopilotrpc_SellRequest | null);
  'request': "buyRequest"|"sellRequest";
}
