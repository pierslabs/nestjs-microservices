import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy, MqttRecordBuilder } from '@nestjs/microservices';
import { Cron, CronExpression } from '@nestjs/schedule';
import { randomUnits } from 'src/utils/RandomUnits';

@Injectable()
export class NuclearReactorService {
  constructor(@Inject('TEST_REACTOR') private client: ClientProxy) {}
  powerLevel() {
    const min = 100;
    const max = 3000;

    const powerLevelReactor = randomUnits(min, max, 'MW');
    const record = new MqttRecordBuilder(powerLevelReactor).setQoS(1).build();
    this.client.send('power-level-out', record).subscribe((res) => {
      console.log(`Response output: < ${res} >`);
    });
  }

  airFlowVentilation() {
    const min = 0.1;
    const max = 5;

    const airFlow = randomUnits(min, max, 'm³/s');
    const record = new MqttRecordBuilder(airFlow).setQoS(1).build();
    this.client.send('airFlowVentilation-out', record).subscribe((res) => {
      console.log(`Response airFlowVentilation output: < ${res} >`);
    });
  }
  coolingSytem() {
    const random = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
    const airFlow = {
      unit: '%',
      value: random,
    };
    const record = new MqttRecordBuilder(airFlow).setQoS(1).build();
    this.client.send('coolingSytem-out', record).subscribe((res) => {
      console.log(`Response coolingSytem output: < ${res} >`);
    });
  }

  temperatureLevel() {
    return console.log('temperatureLevel');
  }

  @Cron(CronExpression.EVERY_5_SECONDS)
  handleCron() {
    this.powerLevel();
  }

  @Cron('*/2 * * * * *')
  handleCron2() {
    this.airFlowVentilation();
  }
  @Cron('* * * * * *')
  handleCron3() {
    this.coolingSytem();
  }
}
