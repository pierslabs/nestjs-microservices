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

  @Cron(CronExpression.EVERY_5_SECONDS)
  powerLevelCron() {
    this.powerLevel();
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

  @Cron('*/2 * * * * *')
  airFlowVentilationCron() {
    this.airFlowVentilation();
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
  @Cron('* * * * * *')
  coolingSytemCron() {
    this.coolingSytem();
  }

  // : 0.2 µSv/h a 1.5 µSv/h

  radioactiveContamination() {
    const min = 0.2;
    const max = 1.5;

    const radioactiveContamination = randomUnits(min, max, 'µSv/h');
    const record = new MqttRecordBuilder(radioactiveContamination)
      .setQoS(1)
      .build();
    this.client
      .send('radioactiveContamination-out', record)
      .subscribe((res) => {
        console.log(`Response radioactiveContamination output: < ${res} >`);
      });
  }

  @Cron('*/7 * * * * *')
  radioactiveContaminationCron() {
    this.radioactiveContamination();
  }
}
