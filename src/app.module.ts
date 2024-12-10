import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessagesController } from './messages/messages.controller';
import { z } from 'zod';
import { ConfigModule } from '@nestjs/config';
import { MessagesModule } from './messages/messages.module';

const envSchema = z.object({
  BACKEND_PORT: z.coerce.number().min(1).max(65535),
});

@Module({
  imports: [
    ConfigModule.forRoot({
      validate: (config) => {
        const result = envSchema.safeParse(config);
        if (!result.success) {
          throw new Error('Invalid environment variables');
        }
        return result.data;
      },
    }),
    MessagesModule,
  ],
  controllers: [AppController, MessagesController],
  providers: [AppService],
})
export class AppModule {}
