// Original file: protos/tapchannelrpc/tapchannel.proto

import type { PaymentPartial as _lnrpc_PaymentPartial, Payment as _lnrpc_Payment } from '../lnrpc/Payment';
import type { AssetAmountPartial as _tapchannelrpc_AssetAmountPartial, AssetAmount as _tapchannelrpc_AssetAmount } from '../tapchannelrpc/AssetAmount';

export interface AssetPaymentPartial {
  'payment'?: (_lnrpc_PaymentPartial | null);
  'assetAmounts'?: (_tapchannelrpc_AssetAmountPartial)[];
}

export interface AssetPayment {
  'payment': (_lnrpc_Payment | null);
  'assetAmounts': (_tapchannelrpc_AssetAmount)[];
}
