import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
const port = 8080; // You can change this to any available port
await app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});}
bootstrap();
