// Original file: protos/portfoliopilotrpc/portfolio_pilot.proto

export const AssetTransferDirection = {
  ASSET_TRANSFER_DIRECTION_UNSPECIFIED: 'ASSET_TRANSFER_DIRECTION_UNSPECIFIED',
  ASSET_TRANSFER_DIRECTION_BUY: 'ASSET_TRANSFER_DIRECTION_BUY',
  ASSET_TRANSFER_DIRECTION_SELL: 'ASSET_TRANSFER_DIRECTION_SELL',
} as const;

export type AssetTransferDirectionPartial =
  | 'ASSET_TRANSFER_DIRECTION_UNSPECIFIED'
  | 0
  | 'ASSET_TRANSFER_DIRECTION_BUY'
  | 1
  | 'ASSET_TRANSFER_DIRECTION_SELL'
  | 2

export type AssetTransferDirection = typeof AssetTransferDirection[keyof typeof AssetTransferDirection]
