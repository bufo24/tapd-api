// Original file: protos/portfoliopilotrpc/portfolio_pilot.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { QueryAssetRatesRequestPartial as _portfoliopilotrpc_QueryAssetRatesRequestPartial, QueryAssetRatesRequest as _portfoliopilotrpc_QueryAssetRatesRequest } from '../portfoliopilotrpc/QueryAssetRatesRequest';
import type { QueryAssetRatesResponsePartial as _portfoliopilotrpc_QueryAssetRatesResponsePartial, QueryAssetRatesResponse as _portfoliopilotrpc_QueryAssetRatesResponse } from '../portfoliopilotrpc/QueryAssetRatesResponse';
import type { ResolveRequestRequestPartial as _portfoliopilotrpc_ResolveRequestRequestPartial, ResolveRequestRequest as _portfoliopilotrpc_ResolveRequestRequest } from '../portfoliopilotrpc/ResolveRequestRequest';
import type { ResolveRequestResponsePartial as _portfoliopilotrpc_ResolveRequestResponsePartial, ResolveRequestResponse as _portfoliopilotrpc_ResolveRequestResponse } from '../portfoliopilotrpc/ResolveRequestResponse';
import type { VerifyAcceptQuoteRequestPartial as _portfoliopilotrpc_VerifyAcceptQuoteRequestPartial, VerifyAcceptQuoteRequest as _portfoliopilotrpc_VerifyAcceptQuoteRequest } from '../portfoliopilotrpc/VerifyAcceptQuoteRequest';
import type { VerifyAcceptQuoteResponsePartial as _portfoliopilotrpc_VerifyAcceptQuoteResponsePartial, VerifyAcceptQuoteResponse as _portfoliopilotrpc_VerifyAcceptQuoteResponse } from '../portfoliopilotrpc/VerifyAcceptQuoteResponse';

export interface PortfolioPilotClient extends grpc.Client {
  QueryAssetRates(argument: _portfoliopilotrpc_QueryAssetRatesRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_portfoliopilotrpc_QueryAssetRatesResponse>): grpc.ClientUnaryCall;
  QueryAssetRates(argument: _portfoliopilotrpc_QueryAssetRatesRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_portfoliopilotrpc_QueryAssetRatesResponse>): grpc.ClientUnaryCall;
  QueryAssetRates(argument: _portfoliopilotrpc_QueryAssetRatesRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_portfoliopilotrpc_QueryAssetRatesResponse>): grpc.ClientUnaryCall;
  QueryAssetRates(argument: _portfoliopilotrpc_QueryAssetRatesRequestPartial, callback: grpc.requestCallback<_portfoliopilotrpc_QueryAssetRatesResponse>): grpc.ClientUnaryCall;
  queryAssetRates(argument: _portfoliopilotrpc_QueryAssetRatesRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_portfoliopilotrpc_QueryAssetRatesResponse>): grpc.ClientUnaryCall;
  queryAssetRates(argument: _portfoliopilotrpc_QueryAssetRatesRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_portfoliopilotrpc_QueryAssetRatesResponse>): grpc.ClientUnaryCall;
  queryAssetRates(argument: _portfoliopilotrpc_QueryAssetRatesRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_portfoliopilotrpc_QueryAssetRatesResponse>): grpc.ClientUnaryCall;
  queryAssetRates(argument: _portfoliopilotrpc_QueryAssetRatesRequestPartial, callback: grpc.requestCallback<_portfoliopilotrpc_QueryAssetRatesResponse>): grpc.ClientUnaryCall;
  
  ResolveRequest(argument: _portfoliopilotrpc_ResolveRequestRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_portfoliopilotrpc_ResolveRequestResponse>): grpc.ClientUnaryCall;
  ResolveRequest(argument: _portfoliopilotrpc_ResolveRequestRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_portfoliopilotrpc_ResolveRequestResponse>): grpc.ClientUnaryCall;
  ResolveRequest(argument: _portfoliopilotrpc_ResolveRequestRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_portfoliopilotrpc_ResolveRequestResponse>): grpc.ClientUnaryCall;
  ResolveRequest(argument: _portfoliopilotrpc_ResolveRequestRequestPartial, callback: grpc.requestCallback<_portfoliopilotrpc_ResolveRequestResponse>): grpc.ClientUnaryCall;
  resolveRequest(argument: _portfoliopilotrpc_ResolveRequestRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_portfoliopilotrpc_ResolveRequestResponse>): grpc.ClientUnaryCall;
  resolveRequest(argument: _portfoliopilotrpc_ResolveRequestRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_portfoliopilotrpc_ResolveRequestResponse>): grpc.ClientUnaryCall;
  resolveRequest(argument: _portfoliopilotrpc_ResolveRequestRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_portfoliopilotrpc_ResolveRequestResponse>): grpc.ClientUnaryCall;
  resolveRequest(argument: _portfoliopilotrpc_ResolveRequestRequestPartial, callback: grpc.requestCallback<_portfoliopilotrpc_ResolveRequestResponse>): grpc.ClientUnaryCall;
  
  VerifyAcceptQuote(argument: _portfoliopilotrpc_VerifyAcceptQuoteRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_portfoliopilotrpc_VerifyAcceptQuoteResponse>): grpc.ClientUnaryCall;
  VerifyAcceptQuote(argument: _portfoliopilotrpc_VerifyAcceptQuoteRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_portfoliopilotrpc_VerifyAcceptQuoteResponse>): grpc.ClientUnaryCall;
  VerifyAcceptQuote(argument: _portfoliopilotrpc_VerifyAcceptQuoteRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_portfoliopilotrpc_VerifyAcceptQuoteResponse>): grpc.ClientUnaryCall;
  VerifyAcceptQuote(argument: _portfoliopilotrpc_VerifyAcceptQuoteRequestPartial, callback: grpc.requestCallback<_portfoliopilotrpc_VerifyAcceptQuoteResponse>): grpc.ClientUnaryCall;
  verifyAcceptQuote(argument: _portfoliopilotrpc_VerifyAcceptQuoteRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_portfoliopilotrpc_VerifyAcceptQuoteResponse>): grpc.ClientUnaryCall;
  verifyAcceptQuote(argument: _portfoliopilotrpc_VerifyAcceptQuoteRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_portfoliopilotrpc_VerifyAcceptQuoteResponse>): grpc.ClientUnaryCall;
  verifyAcceptQuote(argument: _portfoliopilotrpc_VerifyAcceptQuoteRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_portfoliopilotrpc_VerifyAcceptQuoteResponse>): grpc.ClientUnaryCall;
  verifyAcceptQuote(argument: _portfoliopilotrpc_VerifyAcceptQuoteRequestPartial, callback: grpc.requestCallback<_portfoliopilotrpc_VerifyAcceptQuoteResponse>): grpc.ClientUnaryCall;
  
}

export interface PortfolioPilotHandlers extends grpc.UntypedServiceImplementation {
  QueryAssetRates: grpc.handleUnaryCall<_portfoliopilotrpc_QueryAssetRatesRequest, _portfoliopilotrpc_QueryAssetRatesResponsePartial>;
  
  ResolveRequest: grpc.handleUnaryCall<_portfoliopilotrpc_ResolveRequestRequest, _portfoliopilotrpc_ResolveRequestResponsePartial>;
  
  VerifyAcceptQuote: grpc.handleUnaryCall<_portfoliopilotrpc_VerifyAcceptQuoteRequest, _portfoliopilotrpc_VerifyAcceptQuoteResponsePartial>;
  
}

export interface PortfolioPilotDefinition extends grpc.ServiceDefinition {
  QueryAssetRates: MethodDefinition<_portfoliopilotrpc_QueryAssetRatesRequestPartial, _portfoliopilotrpc_QueryAssetRatesResponsePartial, _portfoliopilotrpc_QueryAssetRatesRequest, _portfoliopilotrpc_QueryAssetRatesResponse>
  ResolveRequest: MethodDefinition<_portfoliopilotrpc_ResolveRequestRequestPartial, _portfoliopilotrpc_ResolveRequestResponsePartial, _portfoliopilotrpc_ResolveRequestRequest, _portfoliopilotrpc_ResolveRequestResponse>
  VerifyAcceptQuote: MethodDefinition<_portfoliopilotrpc_VerifyAcceptQuoteRequestPartial, _portfoliopilotrpc_VerifyAcceptQuoteResponsePartial, _portfoliopilotrpc_VerifyAcceptQuoteRequest, _portfoliopilotrpc_VerifyAcceptQuoteResponse>
}
