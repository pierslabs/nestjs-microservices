import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy, MqttRecordBuilder } from '@nestjs/microservices';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class NuclearReactorService {
  constructor(@Inject('TEST_REACTOR') private client: ClientProxy) {}
  powerLevel() {
    const min = 100;
    const max = 3000;

    const randomValue = Math.random() * (max - min) + min;
    const powerLevelReactor = {
      unit: 'MW',
      value: randomValue,
    };

    const record = new MqttRecordBuilder(powerLevelReactor).setQoS(1).build();
    this.client.send('power-level-out', record).subscribe((res) => {
      console.log(`Response output: < ${res} >`);
    });
  }

  temperatureLevel() {
    return console.log('temperatureLevel');
  }

  @Cron(CronExpression.EVERY_5_SECONDS)
  handleCron() {
    console.log('Called every 5 seconds');
    this.powerLevel();
  }
}
