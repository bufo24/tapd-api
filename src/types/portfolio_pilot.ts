import type * as grpc from '@grpc/grpc-js';
import type { EnumTypeDefinition, MessageTypeDefinition } from '@grpc/proto-loader';

import type { PortfolioPilotClient as _portfoliopilotrpc_PortfolioPilotClient, PortfolioPilotDefinition as _portfoliopilotrpc_PortfolioPilotDefinition } from './portfoliopilotrpc/PortfolioPilot';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  portfoliopilotrpc: {
    AcceptedQuote: MessageTypeDefinition
    AssetRate: MessageTypeDefinition
    AssetSpecifier: MessageTypeDefinition
    AssetTransferDirection: EnumTypeDefinition
    BuyRequest: MessageTypeDefinition
    ExecutionPolicy: EnumTypeDefinition
    FixedPoint: MessageTypeDefinition
    Intent: EnumTypeDefinition
    PortfolioPilot: SubtypeConstructor<typeof grpc.Client, _portfoliopilotrpc_PortfolioPilotClient> & { service: _portfoliopilotrpc_PortfolioPilotDefinition }
    QueryAssetRatesRequest: MessageTypeDefinition
    QueryAssetRatesResponse: MessageTypeDefinition
    QuoteRespStatus: EnumTypeDefinition
    RejectCode: EnumTypeDefinition
    RejectErr: MessageTypeDefinition
    ResolveRequestRequest: MessageTypeDefinition
    ResolveRequestResponse: MessageTypeDefinition
    SellRequest: MessageTypeDefinition
    VerifyAcceptQuoteRequest: MessageTypeDefinition
    VerifyAcceptQuoteResponse: MessageTypeDefinition
  }
}

