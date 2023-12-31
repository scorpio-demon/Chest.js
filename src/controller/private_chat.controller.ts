import { Body, Controller, Delete, Get,Param,Post } from '@nestjs/common';
import { PrivateChatService } from '../service';
import ResponceT from '../interface/responce';
import { Private_chat } from '../schema';

@Controller('api/private_chat')
export class PrivateChatController {
  constructor(private readonly privateChatService: PrivateChatService) {}

  @Get(":id")
  async getPrivateChat(@Param("id") id: string): Promise<ResponceT> {
    return await this.privateChatService.getPrivateChat(id)
  }

  @Post()
  async createPrivateChat(@Body() privateChat:Private_chat): Promise<ResponceT> {
    return await this.privateChatService.createPrivateChat(privateChat)
  }

  @Delete(":id")
  async deletePrivateChat(@Param("id") id: string): Promise<ResponceT> {
    return await this.privateChatService.deletePrivateChat(id)
  }
}
