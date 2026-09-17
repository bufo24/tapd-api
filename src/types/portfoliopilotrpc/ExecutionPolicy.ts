// Original file: protos/portfoliopilotrpc/portfolio_pilot.proto

export const ExecutionPolicy = {
  EXECUTION_POLICY_IOC: 'EXECUTION_POLICY_IOC',
  EXECUTION_POLICY_FOK: 'EXECUTION_POLICY_FOK',
} as const;

export type ExecutionPolicyPartial =
  | 'EXECUTION_POLICY_IOC'
  | 0
  | 'EXECUTION_POLICY_FOK'
  | 1

export type ExecutionPolicy = typeof ExecutionPolicy[keyof typeof ExecutionPolicy]
