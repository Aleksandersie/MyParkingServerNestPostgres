import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const PORT = process.env.PORT || 5000;
  const app = await NestFactory.create(AppModule, { cors: true });
  await app.listen(PORT, () =>
    console.log(`Server is running on port ${PORT}`),
  );
}
bootstrap();
