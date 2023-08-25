import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import {
  Ctx,
  MessagePattern,
  MqttContext,
  Payload,
} from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('ftf-input')
  sumData(@Payload() payload: number[], @Ctx() context: MqttContext) {
    console.log(`NEW MESSAGE SEND: ${context.getTopic()}`);
    console.log(`payload: ${payload}`);
    console.log(`context: `, context.getPacket());
    return this.appService.sumDataService(payload);
  }

  @MessagePattern('ftf-output')
  logData(@Payload() payload: number[], @Ctx() context: MqttContext) {
    console.log(`NEW MESSAGE RECEIVED: ${context.getTopic()}`);
    console.log(`payload: ${payload}`);
    console.log(`Packet: `, context.getPacket());
    return payload + `response from logData() in -t ${context.getTopic()}`;
  }
}
