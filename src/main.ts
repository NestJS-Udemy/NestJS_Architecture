import { Controller, Module, Get } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";

@Controller()
class AppController {
  @Get()
  getRootRoute() {
    return "hi rani!";
  }
}

@Module({
  controllers: [AppController],
})
class AppMoule {}

async function bootstrap() {
  const app = await NestFactory.create(AppMoule);

  await app.listen(8000);
}
bootstrap();
