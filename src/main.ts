import { NestFactory } from "@nestjs/core";
import { AppMoule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppMoule);

  await app.listen(8000);
}
bootstrap();
