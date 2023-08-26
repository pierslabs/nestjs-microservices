import { Controller } from '@nestjs/common';
import { NuclearReactorService } from './nuclear-reactor.service';
import {
  Ctx,
  MessagePattern,
  MqttContext,
  Payload,
} from '@nestjs/microservices';

@Controller()
export class NuclearReactorController {
  constructor(private readonly nuclearReactorService: NuclearReactorService) {}

  //Power level is a message pattern
  @MessagePattern('power-level')
  powerLevel(@Ctx() context: MqttContext) {
    console.log(
      `NEW MESSAGE RECEIVED FROM NUCLEAR-REACTOR: ${context.getTopic()}`,
    );
    console.log(`context: `, context.getPacket());
    return this.nuclearReactorService.powerLevel();
  }

  @MessagePattern('power-level-out')
  logPowerLevel(@Payload() payload: string, @Ctx() context: MqttContext) {
    console.log(`NEW MESSAGE RECEIVED: ${context.getTopic()}`);
    console.log(`payload: ${payload}`);
    console.log(`Packet: `, context.getPacket());
    return `response from logPowerLevel() in -t ${context.getTopic()}`;
  }

  // Temperature level is a message pattern
  @MessagePattern('temperature-level')
  temperatureLevel(@Ctx() context: MqttContext) {
    console.log(
      `NEW MESSAGE RECEIVED FROM NUCLEAR-REACTOR temperature-level: ${context.getTopic()}`,
    );
    console.log(`context: `, context.getPacket());
    return this.nuclearReactorService.temperatureLevel();
  }
  // Steam preasure  level is a message pattern
}
