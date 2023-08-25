import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.MQTT,
      options: {
        subscribeOptions: { qos: 1 },
        url: 'mqtt://localhost:1883',
      },
    },
  );
  await app.listen();
}
bootstrap();
