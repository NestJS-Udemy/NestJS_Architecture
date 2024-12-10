import { Controller, Get, Post } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  @Get()
  listMessages() {
    return [{ id: 1, content: 'hello rani!' }];
  }

  @Post()
  createMessage() {}

  @Get('/:id')
  getMessage() {}
}
