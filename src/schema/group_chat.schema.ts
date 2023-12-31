import Joi = require('joi');
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

//* Schema
@Schema()
export class Group_chat {
  @Prop({
    type: Types.ObjectId,
    required: true,
    unique: true,
  })
  custom_id: string;

  @Prop({
    required: true,
    unique: true,
  })
  name: string;

  @Prop({
    required: true,
    unique: true,
  })
  admins: string[];

  @Prop({
    required: true,
    unique: true,
  })
  members: string[];
}

export type Group_chatDocument = HydratedDocument<Group_chat>;
export const Group_chatSchema = SchemaFactory.createForClass(Group_chat);

// * Joi
export const groupChatPostSchema = Joi.object({
  custom_id: Joi.string().min(12).max(30),
  name: Joi.string().min(3).max(30).required(),
  admins: Joi.array().min(1).max(100).required(),
  members: Joi.array().min(1).max(10000).required(),
});

export const groupChatPutSchema = Joi.object({
  custom_id: Joi.string().min(12).max(30).required(),
  name: Joi.string().min(3).max(30),
  admins: Joi.array().min(1).max(100),
  members: Joi.array().min(1).max(10000),
});


export const groupChatGetSchema = Joi.object({
  custom_id: Joi.string().min(12).max(30).required(),
});

export const groupChatDeleteSchema = Joi.object({
  custom_id: Joi.string().min(12).max(30).required(),
});
