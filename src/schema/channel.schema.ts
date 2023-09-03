import Joi = require('joi');

export const channelPostSchema = Joi.object({
  id: Joi.string().min(12).max(30),
  admins: Joi.string().min(3).max(30).required(),
  members: Joi.string().min(3).max(30).required(),
});

export const channelPutSchema = Joi.object({
  id: Joi.string().min(12).max(30).required(),
  admins: Joi.string().min(3).max(30),
  members: Joi.string().min(3).max(30),
});


export const channelDeleteSchema = Joi.object({
  id: Joi.string().min(12).max(30).required(),
});