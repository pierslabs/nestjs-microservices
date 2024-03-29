import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ScheduleModule } from '@nestjs/schedule';
import { NuclearReactorModule } from './nuclear-reactor/nuclear-reactor.module';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    ClientsModule.register([
      {
        name: 'TEST_CLIENT',
        transport: Transport.MQTT,
        options: {
          subscribeOptions: { qos: 1 },
          url: 'mqtt://localhost:1883',
        },
      },
    ]),
    NuclearReactorModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
