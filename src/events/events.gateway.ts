import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import IncomeMessageT from 'src/interface/incomeMessage';
import ResponceT from 'src/interface/responce';
import prisma from 'src/lib/prisma';
import { ChatsService } from 'src/service';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class EventsGateway {
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('sendMessage')
  async createMessage(@MessageBody() data: IncomeMessageT): Promise<ResponceT> {
    const chats = new ChatsService()
    const chats_count:number = await prisma.chats.count()
    data.custom_id = chats_count + 1
    const responce: ResponceT = await chats.createChats(data);

    return responce;
  }

  @SubscribeMessage('reciveMessage')
  async checkMessage(@MessageBody() data:{chat_id:string}): Promise<ResponceT> {
    const chats = new ChatsService()
    const responce: ResponceT = await chats.getChats(data.chat_id);

    return responce;
  }
}