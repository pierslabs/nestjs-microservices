import { Module } from '@nestjs/common';
import { NuclearReactorService } from './nuclear-reactor.service';
import { NuclearReactorController } from './nuclear-reactor.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    ClientsModule.register([
      {
        name: 'TEST_REACTOR',
        transport: Transport.MQTT,
        options: {
          subscribeOptions: { qos: 1 },
          url: 'mqtt://127.0.0.1:1883',
        },
      },
    ]),
  ],
  controllers: [NuclearReactorController],
  providers: [NuclearReactorService],
})
export class NuclearReactorModule {}
