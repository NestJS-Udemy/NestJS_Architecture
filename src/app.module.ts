import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessagesController } from './messages/messages.controller';
import { MessagesModule } from './messages/messages.module';

@Module({
  imports: [MessagesModule],
  controllers: [AppController, MessagesController],
  providers: [AppService],
})
export class AppModule {}
