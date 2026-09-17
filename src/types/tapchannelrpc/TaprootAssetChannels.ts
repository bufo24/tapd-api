// Original file: protos/tapchannelrpc/tapchannel.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { AddInvoiceRequestPartial as _tapchannelrpc_AddInvoiceRequestPartial, AddInvoiceRequest as _tapchannelrpc_AddInvoiceRequest } from '../tapchannelrpc/AddInvoiceRequest';
import type { AddInvoiceResponsePartial as _tapchannelrpc_AddInvoiceResponsePartial, AddInvoiceResponse as _tapchannelrpc_AddInvoiceResponse } from '../tapchannelrpc/AddInvoiceResponse';
import type { AssetInvoicePartial as _tapchannelrpc_AssetInvoicePartial, AssetInvoice as _tapchannelrpc_AssetInvoice } from '../tapchannelrpc/AssetInvoice';
import type { AssetPayReqPartial as _tapchannelrpc_AssetPayReqPartial, AssetPayReq as _tapchannelrpc_AssetPayReq } from '../tapchannelrpc/AssetPayReq';
import type { AssetPayReqResponsePartial as _tapchannelrpc_AssetPayReqResponsePartial, AssetPayReqResponse as _tapchannelrpc_AssetPayReqResponse } from '../tapchannelrpc/AssetPayReqResponse';
import type { AssetPaymentPartial as _tapchannelrpc_AssetPaymentPartial, AssetPayment as _tapchannelrpc_AssetPayment } from '../tapchannelrpc/AssetPayment';
import type { EncodeCustomRecordsRequestPartial as _tapchannelrpc_EncodeCustomRecordsRequestPartial, EncodeCustomRecordsRequest as _tapchannelrpc_EncodeCustomRecordsRequest } from '../tapchannelrpc/EncodeCustomRecordsRequest';
import type { EncodeCustomRecordsResponsePartial as _tapchannelrpc_EncodeCustomRecordsResponsePartial, EncodeCustomRecordsResponse as _tapchannelrpc_EncodeCustomRecordsResponse } from '../tapchannelrpc/EncodeCustomRecordsResponse';
import type { FundChannelRequestPartial as _tapchannelrpc_FundChannelRequestPartial, FundChannelRequest as _tapchannelrpc_FundChannelRequest } from '../tapchannelrpc/FundChannelRequest';
import type { FundChannelResponsePartial as _tapchannelrpc_FundChannelResponsePartial, FundChannelResponse as _tapchannelrpc_FundChannelResponse } from '../tapchannelrpc/FundChannelResponse';
import type { ListInvoicesRequestPartial as _tapchannelrpc_ListInvoicesRequestPartial, ListInvoicesRequest as _tapchannelrpc_ListInvoicesRequest } from '../tapchannelrpc/ListInvoicesRequest';
import type { ListInvoicesResponsePartial as _tapchannelrpc_ListInvoicesResponsePartial, ListInvoicesResponse as _tapchannelrpc_ListInvoicesResponse } from '../tapchannelrpc/ListInvoicesResponse';
import type { ListPaymentsRequestPartial as _tapchannelrpc_ListPaymentsRequestPartial, ListPaymentsRequest as _tapchannelrpc_ListPaymentsRequest } from '../tapchannelrpc/ListPaymentsRequest';
import type { ListPaymentsResponsePartial as _tapchannelrpc_ListPaymentsResponsePartial, ListPaymentsResponse as _tapchannelrpc_ListPaymentsResponse } from '../tapchannelrpc/ListPaymentsResponse';
import type { SendPaymentRequestPartial as _tapchannelrpc_SendPaymentRequestPartial, SendPaymentRequest as _tapchannelrpc_SendPaymentRequest } from '../tapchannelrpc/SendPaymentRequest';
import type { SendPaymentResponsePartial as _tapchannelrpc_SendPaymentResponsePartial, SendPaymentResponse as _tapchannelrpc_SendPaymentResponse } from '../tapchannelrpc/SendPaymentResponse';
import type { SubscribeInvoicesRequestPartial as _tapchannelrpc_SubscribeInvoicesRequestPartial, SubscribeInvoicesRequest as _tapchannelrpc_SubscribeInvoicesRequest } from '../tapchannelrpc/SubscribeInvoicesRequest';
import type { SubscribePaymentsRequestPartial as _tapchannelrpc_SubscribePaymentsRequestPartial, SubscribePaymentsRequest as _tapchannelrpc_SubscribePaymentsRequest } from '../tapchannelrpc/SubscribePaymentsRequest';
import type { TrackPaymentRequestPartial as _tapchannelrpc_TrackPaymentRequestPartial, TrackPaymentRequest as _tapchannelrpc_TrackPaymentRequest } from '../tapchannelrpc/TrackPaymentRequest';

export interface TaprootAssetChannelsClient extends grpc.Client {
  AddInvoice(argument: _tapchannelrpc_AddInvoiceRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tapchannelrpc_AddInvoiceResponse>): grpc.ClientUnaryCall;
  AddInvoice(argument: _tapchannelrpc_AddInvoiceRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_tapchannelrpc_AddInvoiceResponse>): grpc.ClientUnaryCall;
  AddInvoice(argument: _tapchannelrpc_AddInvoiceRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_tapchannelrpc_AddInvoiceResponse>): grpc.ClientUnaryCall;
  AddInvoice(argument: _tapchannelrpc_AddInvoiceRequestPartial, callback: grpc.requestCallback<_tapchannelrpc_AddInvoiceResponse>): grpc.ClientUnaryCall;
  addInvoice(argument: _tapchannelrpc_AddInvoiceRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tapchannelrpc_AddInvoiceResponse>): grpc.ClientUnaryCall;
  addInvoice(argument: _tapchannelrpc_AddInvoiceRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_tapchannelrpc_AddInvoiceResponse>): grpc.ClientUnaryCall;
  addInvoice(argument: _tapchannelrpc_AddInvoiceRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_tapchannelrpc_AddInvoiceResponse>): grpc.ClientUnaryCall;
  addInvoice(argument: _tapchannelrpc_AddInvoiceRequestPartial, callback: grpc.requestCallback<_tapchannelrpc_AddInvoiceResponse>): grpc.ClientUnaryCall;
  
  DecodeAssetPayReq(argument: _tapchannelrpc_AssetPayReqPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tapchannelrpc_AssetPayReqResponse>): grpc.ClientUnaryCall;
  DecodeAssetPayReq(argument: _tapchannelrpc_AssetPayReqPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_tapchannelrpc_AssetPayReqResponse>): grpc.ClientUnaryCall;
  DecodeAssetPayReq(argument: _tapchannelrpc_AssetPayReqPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_tapchannelrpc_AssetPayReqResponse>): grpc.ClientUnaryCall;
  DecodeAssetPayReq(argument: _tapchannelrpc_AssetPayReqPartial, callback: grpc.requestCallback<_tapchannelrpc_AssetPayReqResponse>): grpc.ClientUnaryCall;
  decodeAssetPayReq(argument: _tapchannelrpc_AssetPayReqPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tapchannelrpc_AssetPayReqResponse>): grpc.ClientUnaryCall;
  decodeAssetPayReq(argument: _tapchannelrpc_AssetPayReqPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_tapchannelrpc_AssetPayReqResponse>): grpc.ClientUnaryCall;
  decodeAssetPayReq(argument: _tapchannelrpc_AssetPayReqPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_tapchannelrpc_AssetPayReqResponse>): grpc.ClientUnaryCall;
  decodeAssetPayReq(argument: _tapchannelrpc_AssetPayReqPartial, callback: grpc.requestCallback<_tapchannelrpc_AssetPayReqResponse>): grpc.ClientUnaryCall;
  
  EncodeCustomRecords(argument: _tapchannelrpc_EncodeCustomRecordsRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tapchannelrpc_EncodeCustomRecordsResponse>): grpc.ClientUnaryCall;
  EncodeCustomRecords(argument: _tapchannelrpc_EncodeCustomRecordsRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_tapchannelrpc_EncodeCustomRecordsResponse>): grpc.ClientUnaryCall;
  EncodeCustomRecords(argument: _tapchannelrpc_EncodeCustomRecordsRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_tapchannelrpc_EncodeCustomRecordsResponse>): grpc.ClientUnaryCall;
  EncodeCustomRecords(argument: _tapchannelrpc_EncodeCustomRecordsRequestPartial, callback: grpc.requestCallback<_tapchannelrpc_EncodeCustomRecordsResponse>): grpc.ClientUnaryCall;
  encodeCustomRecords(argument: _tapchannelrpc_EncodeCustomRecordsRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tapchannelrpc_EncodeCustomRecordsResponse>): grpc.ClientUnaryCall;
  encodeCustomRecords(argument: _tapchannelrpc_EncodeCustomRecordsRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_tapchannelrpc_EncodeCustomRecordsResponse>): grpc.ClientUnaryCall;
  encodeCustomRecords(argument: _tapchannelrpc_EncodeCustomRecordsRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_tapchannelrpc_EncodeCustomRecordsResponse>): grpc.ClientUnaryCall;
  encodeCustomRecords(argument: _tapchannelrpc_EncodeCustomRecordsRequestPartial, callback: grpc.requestCallback<_tapchannelrpc_EncodeCustomRecordsResponse>): grpc.ClientUnaryCall;
  
  FundChannel(argument: _tapchannelrpc_FundChannelRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tapchannelrpc_FundChannelResponse>): grpc.ClientUnaryCall;
  FundChannel(argument: _tapchannelrpc_FundChannelRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_tapchannelrpc_FundChannelResponse>): grpc.ClientUnaryCall;
  FundChannel(argument: _tapchannelrpc_FundChannelRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_tapchannelrpc_FundChannelResponse>): grpc.ClientUnaryCall;
  FundChannel(argument: _tapchannelrpc_FundChannelRequestPartial, callback: grpc.requestCallback<_tapchannelrpc_FundChannelResponse>): grpc.ClientUnaryCall;
  fundChannel(argument: _tapchannelrpc_FundChannelRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tapchannelrpc_FundChannelResponse>): grpc.ClientUnaryCall;
  fundChannel(argument: _tapchannelrpc_FundChannelRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_tapchannelrpc_FundChannelResponse>): grpc.ClientUnaryCall;
  fundChannel(argument: _tapchannelrpc_FundChannelRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_tapchannelrpc_FundChannelResponse>): grpc.ClientUnaryCall;
  fundChannel(argument: _tapchannelrpc_FundChannelRequestPartial, callback: grpc.requestCallback<_tapchannelrpc_FundChannelResponse>): grpc.ClientUnaryCall;
  
  ListInvoices(argument: _tapchannelrpc_ListInvoicesRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tapchannelrpc_ListInvoicesResponse>): grpc.ClientUnaryCall;
  ListInvoices(argument: _tapchannelrpc_ListInvoicesRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_tapchannelrpc_ListInvoicesResponse>): grpc.ClientUnaryCall;
  ListInvoices(argument: _tapchannelrpc_ListInvoicesRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_tapchannelrpc_ListInvoicesResponse>): grpc.ClientUnaryCall;
  ListInvoices(argument: _tapchannelrpc_ListInvoicesRequestPartial, callback: grpc.requestCallback<_tapchannelrpc_ListInvoicesResponse>): grpc.ClientUnaryCall;
  listInvoices(argument: _tapchannelrpc_ListInvoicesRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tapchannelrpc_ListInvoicesResponse>): grpc.ClientUnaryCall;
  listInvoices(argument: _tapchannelrpc_ListInvoicesRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_tapchannelrpc_ListInvoicesResponse>): grpc.ClientUnaryCall;
  listInvoices(argument: _tapchannelrpc_ListInvoicesRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_tapchannelrpc_ListInvoicesResponse>): grpc.ClientUnaryCall;
  listInvoices(argument: _tapchannelrpc_ListInvoicesRequestPartial, callback: grpc.requestCallback<_tapchannelrpc_ListInvoicesResponse>): grpc.ClientUnaryCall;
  
  ListPayments(argument: _tapchannelrpc_ListPaymentsRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tapchannelrpc_ListPaymentsResponse>): grpc.ClientUnaryCall;
  ListPayments(argument: _tapchannelrpc_ListPaymentsRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_tapchannelrpc_ListPaymentsResponse>): grpc.ClientUnaryCall;
  ListPayments(argument: _tapchannelrpc_ListPaymentsRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_tapchannelrpc_ListPaymentsResponse>): grpc.ClientUnaryCall;
  ListPayments(argument: _tapchannelrpc_ListPaymentsRequestPartial, callback: grpc.requestCallback<_tapchannelrpc_ListPaymentsResponse>): grpc.ClientUnaryCall;
  listPayments(argument: _tapchannelrpc_ListPaymentsRequestPartial, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_tapchannelrpc_ListPaymentsResponse>): grpc.ClientUnaryCall;
  listPayments(argument: _tapchannelrpc_ListPaymentsRequestPartial, metadata: grpc.Metadata, callback: grpc.requestCallback<_tapchannelrpc_ListPaymentsResponse>): grpc.ClientUnaryCall;
  listPayments(argument: _tapchannelrpc_ListPaymentsRequestPartial, options: grpc.CallOptions, callback: grpc.requestCallback<_tapchannelrpc_ListPaymentsResponse>): grpc.ClientUnaryCall;
  listPayments(argument: _tapchannelrpc_ListPaymentsRequestPartial, callback: grpc.requestCallback<_tapchannelrpc_ListPaymentsResponse>): grpc.ClientUnaryCall;
  
  SendPayment(argument: _tapchannelrpc_SendPaymentRequestPartial, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_tapchannelrpc_SendPaymentResponse>;
  SendPayment(argument: _tapchannelrpc_SendPaymentRequestPartial, options?: grpc.CallOptions): grpc.ClientReadableStream<_tapchannelrpc_SendPaymentResponse>;
  sendPayment(argument: _tapchannelrpc_SendPaymentRequestPartial, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_tapchannelrpc_SendPaymentResponse>;
  sendPayment(argument: _tapchannelrpc_SendPaymentRequestPartial, options?: grpc.CallOptions): grpc.ClientReadableStream<_tapchannelrpc_SendPaymentResponse>;
  
  SubscribeInvoices(argument: _tapchannelrpc_SubscribeInvoicesRequestPartial, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_tapchannelrpc_AssetInvoice>;
  SubscribeInvoices(argument: _tapchannelrpc_SubscribeInvoicesRequestPartial, options?: grpc.CallOptions): grpc.ClientReadableStream<_tapchannelrpc_AssetInvoice>;
  subscribeInvoices(argument: _tapchannelrpc_SubscribeInvoicesRequestPartial, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_tapchannelrpc_AssetInvoice>;
  subscribeInvoices(argument: _tapchannelrpc_SubscribeInvoicesRequestPartial, options?: grpc.CallOptions): grpc.ClientReadableStream<_tapchannelrpc_AssetInvoice>;
  
  SubscribePayments(argument: _tapchannelrpc_SubscribePaymentsRequestPartial, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_tapchannelrpc_AssetPayment>;
  SubscribePayments(argument: _tapchannelrpc_SubscribePaymentsRequestPartial, options?: grpc.CallOptions): grpc.ClientReadableStream<_tapchannelrpc_AssetPayment>;
  subscribePayments(argument: _tapchannelrpc_SubscribePaymentsRequestPartial, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_tapchannelrpc_AssetPayment>;
  subscribePayments(argument: _tapchannelrpc_SubscribePaymentsRequestPartial, options?: grpc.CallOptions): grpc.ClientReadableStream<_tapchannelrpc_AssetPayment>;
  
  TrackPayment(argument: _tapchannelrpc_TrackPaymentRequestPartial, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_tapchannelrpc_AssetPayment>;
  TrackPayment(argument: _tapchannelrpc_TrackPaymentRequestPartial, options?: grpc.CallOptions): grpc.ClientReadableStream<_tapchannelrpc_AssetPayment>;
  trackPayment(argument: _tapchannelrpc_TrackPaymentRequestPartial, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_tapchannelrpc_AssetPayment>;
  trackPayment(argument: _tapchannelrpc_TrackPaymentRequestPartial, options?: grpc.CallOptions): grpc.ClientReadableStream<_tapchannelrpc_AssetPayment>;
  
}

export interface TaprootAssetChannelsHandlers extends grpc.UntypedServiceImplementation {
  AddInvoice: grpc.handleUnaryCall<_tapchannelrpc_AddInvoiceRequest, _tapchannelrpc_AddInvoiceResponsePartial>;
  
  DecodeAssetPayReq: grpc.handleUnaryCall<_tapchannelrpc_AssetPayReq, _tapchannelrpc_AssetPayReqResponsePartial>;
  
  EncodeCustomRecords: grpc.handleUnaryCall<_tapchannelrpc_EncodeCustomRecordsRequest, _tapchannelrpc_EncodeCustomRecordsResponsePartial>;
  
  FundChannel: grpc.handleUnaryCall<_tapchannelrpc_FundChannelRequest, _tapchannelrpc_FundChannelResponsePartial>;
  
  ListInvoices: grpc.handleUnaryCall<_tapchannelrpc_ListInvoicesRequest, _tapchannelrpc_ListInvoicesResponsePartial>;
  
  ListPayments: grpc.handleUnaryCall<_tapchannelrpc_ListPaymentsRequest, _tapchannelrpc_ListPaymentsResponsePartial>;
  
  SendPayment: grpc.handleServerStreamingCall<_tapchannelrpc_SendPaymentRequest, _tapchannelrpc_SendPaymentResponsePartial>;
  
  SubscribeInvoices: grpc.handleServerStreamingCall<_tapchannelrpc_SubscribeInvoicesRequest, _tapchannelrpc_AssetInvoicePartial>;
  
  SubscribePayments: grpc.handleServerStreamingCall<_tapchannelrpc_SubscribePaymentsRequest, _tapchannelrpc_AssetPaymentPartial>;
  
  TrackPayment: grpc.handleServerStreamingCall<_tapchannelrpc_TrackPaymentRequest, _tapchannelrpc_AssetPaymentPartial>;
  
}

export interface TaprootAssetChannelsDefinition extends grpc.ServiceDefinition {
  AddInvoice: MethodDefinition<_tapchannelrpc_AddInvoiceRequestPartial, _tapchannelrpc_AddInvoiceResponsePartial, _tapchannelrpc_AddInvoiceRequest, _tapchannelrpc_AddInvoiceResponse>
  DecodeAssetPayReq: MethodDefinition<_tapchannelrpc_AssetPayReqPartial, _tapchannelrpc_AssetPayReqResponsePartial, _tapchannelrpc_AssetPayReq, _tapchannelrpc_AssetPayReqResponse>
  EncodeCustomRecords: MethodDefinition<_tapchannelrpc_EncodeCustomRecordsRequestPartial, _tapchannelrpc_EncodeCustomRecordsResponsePartial, _tapchannelrpc_EncodeCustomRecordsRequest, _tapchannelrpc_EncodeCustomRecordsResponse>
  FundChannel: MethodDefinition<_tapchannelrpc_FundChannelRequestPartial, _tapchannelrpc_FundChannelResponsePartial, _tapchannelrpc_FundChannelRequest, _tapchannelrpc_FundChannelResponse>
  ListInvoices: MethodDefinition<_tapchannelrpc_ListInvoicesRequestPartial, _tapchannelrpc_ListInvoicesResponsePartial, _tapchannelrpc_ListInvoicesRequest, _tapchannelrpc_ListInvoicesResponse>
  ListPayments: MethodDefinition<_tapchannelrpc_ListPaymentsRequestPartial, _tapchannelrpc_ListPaymentsResponsePartial, _tapchannelrpc_ListPaymentsRequest, _tapchannelrpc_ListPaymentsResponse>
  SendPayment: MethodDefinition<_tapchannelrpc_SendPaymentRequestPartial, _tapchannelrpc_SendPaymentResponsePartial, _tapchannelrpc_SendPaymentRequest, _tapchannelrpc_SendPaymentResponse>
  SubscribeInvoices: MethodDefinition<_tapchannelrpc_SubscribeInvoicesRequestPartial, _tapchannelrpc_AssetInvoicePartial, _tapchannelrpc_SubscribeInvoicesRequest, _tapchannelrpc_AssetInvoice>
  SubscribePayments: MethodDefinition<_tapchannelrpc_SubscribePaymentsRequestPartial, _tapchannelrpc_AssetPaymentPartial, _tapchannelrpc_SubscribePaymentsRequest, _tapchannelrpc_AssetPayment>
  TrackPayment: MethodDefinition<_tapchannelrpc_TrackPaymentRequestPartial, _tapchannelrpc_AssetPaymentPartial, _tapchannelrpc_TrackPaymentRequest, _tapchannelrpc_AssetPayment>
}
