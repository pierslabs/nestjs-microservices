import { Controller, Logger } from '@nestjs/common';
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

  logger = new Logger('NuclearReactorController');

  //Power level is a message pattern
  @MessagePattern('power-level')
  powerLevel(@Ctx() context: MqttContext) {
    this.logger.log(
      `NEW MESSAGE RECEIVED FROM NUCLEAR-REACTOR: ${context.getTopic()}`,
    );
    this.logger.log(`context: `, context.getPacket());
    return this.nuclearReactorService.powerLevel();
  }

  @MessagePattern('power-level-out')
  logPowerLevel(@Payload() payload: string, @Ctx() context: MqttContext) {
    this.logger.log(`NEW MESSAGE RECEIVED: ${context.getTopic()}`);
    this.logger.log(`payload: ${payload}`);
    this.logger.log(`Packet: `, context.getPacket());
    return `response from logPowerLevel() in -t ${context.getTopic()}`;
  }

  // Airflow is a message pattern
  @MessagePattern('airFlowVentilation')
  airFlowVentilation(@Ctx() context: MqttContext) {
    this.logger.log(
      `NEW MESSAGE RECEIVED FROM NUCLEAR-REACTOR: ${context.getTopic()}`,
    );
    this.logger.log(`context: `, context.getPacket());
    return this.nuclearReactorService.airFlowVentilation();
  }

  @MessagePattern('airFlowVentilation-out')
  logAirFlowVentilation(
    @Payload() payload: string,
    @Ctx() context: MqttContext,
  ) {
    this.logger.log(`NEW MESSAGE RECEIVED: ${context.getTopic()}`);
    this.logger.log(`payload: ${payload}`);
    this.logger.log(`Packet: `, context.getPacket());
    return `response from logAirFlowVentilation() in -t ${context.getTopic()}`;
  }
  // coolngSystem is a message pattern
  @MessagePattern('coolingSytem')
  coolingSytem(@Ctx() context: MqttContext) {
    this.logger.log(
      `NEW MESSAGE RECEIVED FROM NUCLEAR-REACTOR: ${context.getTopic()}`,
    );
    this.logger.log(`context: `, context.getPacket());
    return this.nuclearReactorService.coolingSytem();
  }

  @MessagePattern('coolingSytem-out')
  logCoolingSytem(@Payload() payload: string, @Ctx() context: MqttContext) {
    this.logger.log(`NEW MESSAGE RECEIVED: ${context.getTopic()}`);
    this.logger.log(`payload: ${payload}`);
    this.logger.log(`Packet: `, context.getPacket());
    return `response from logCoolingSytem() in -t ${context.getTopic()}`;
  }
}
