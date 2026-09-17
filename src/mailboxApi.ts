import { ClientDuplexStream } from '@grpc/grpc-js';
import { promisify } from 'util';
import { TapdClientOptions } from './';
import { loadProto } from './proto';
import {
  MailboxClient,
  MailboxInfoRequestPartial,
  MailboxInfoResponse,
  ReceiveMessagesRequestPartial,
  ReceiveMessagesResponse,
  RemoveMessageRequestPartial,
  RemoveMessageResponse,
  SendMessageRequestPartial,
  SendMessageResponse,
} from './types';
import { ProtoGrpcType } from './types/mailbox';

/**
 * @MailboxApi API interface for tapd's authenticated mailbox RPC sub-server.
 */
export class MailboxApi {
  static create(options: TapdClientOptions) {
    const { proto, credentials, params } = loadProto<ProtoGrpcType>(
      'authmailboxrpc/mailbox.proto',
      options
    );

    return new MailboxApi(
      new proto.authmailboxrpc.Mailbox(options.socket, credentials, params)
    );
  }

  client: MailboxClient;

  constructor(client: MailboxClient) {
    this.client = client;
  }

  /**
   * @sendMessage sends an encrypted message to a receiver's mailbox.
   */
  async sendMessage(
    request: SendMessageRequestPartial = {}
  ): Promise<SendMessageResponse> {
    return promisify(this.client.SendMessage.bind(this.client))(request);
  }

  /**
   * @receiveMessages opens a bidirectional stream for receiving mailbox
   * messages and acknowledging delivery.
   */
  receiveMessages(): ClientDuplexStream<
    ReceiveMessagesRequestPartial,
    ReceiveMessagesResponse
  > {
    return this.client.ReceiveMessages();
  }

  /**
   * @mailboxInfo returns information about the authenticated mailbox.
   */
  async mailboxInfo(
    request: MailboxInfoRequestPartial = {}
  ): Promise<MailboxInfoResponse> {
    return promisify(this.client.MailboxInfo.bind(this.client))(request);
  }

  /**
   * @removeMessage removes messages owned by the authenticated receiver.
   */
  async removeMessage(
    request: RemoveMessageRequestPartial = {}
  ): Promise<RemoveMessageResponse> {
    return promisify(this.client.RemoveMessage.bind(this.client))(request);
  }
}
