// Original file: protos/assetwalletrpc/assetwallet.proto

export const TransitionProofVersion = {
  TRANSITION_PROOF_VERSION_V0: 'TRANSITION_PROOF_VERSION_V0',
  TRANSITION_PROOF_VERSION_V1: 'TRANSITION_PROOF_VERSION_V1',
} as const;

export type TransitionProofVersionPartial =
  | 'TRANSITION_PROOF_VERSION_V0'
  | 0
  | 'TRANSITION_PROOF_VERSION_V1'
  | 1

export type TransitionProofVersion = typeof TransitionProofVersion[keyof typeof TransitionProofVersion]
