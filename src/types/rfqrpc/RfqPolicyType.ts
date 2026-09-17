// Original file: protos/rfqrpc/rfq.proto

export const RfqPolicyType = {
  RFQ_POLICY_TYPE_SALE: 'RFQ_POLICY_TYPE_SALE',
  RFQ_POLICY_TYPE_PURCHASE: 'RFQ_POLICY_TYPE_PURCHASE',
} as const;

export type RfqPolicyTypePartial =
  | 'RFQ_POLICY_TYPE_SALE'
  | 0
  | 'RFQ_POLICY_TYPE_PURCHASE'
  | 1

export type RfqPolicyType = typeof RfqPolicyType[keyof typeof RfqPolicyType]
