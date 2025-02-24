const { NestFactory } = require('@nestjs/core');
const { AppModule } = require('./dist/app.module'); // Assuming you've built the app and it's in dist folder

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(8080, () => {
    console.log('Server is running on http://localhost:3000');
  });
}

bootstrap();