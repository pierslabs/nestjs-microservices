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

  @Cron('*/5 * * * * *')
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
  @Cron('*/10 * * * * *')
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

  @Cron('*/23 * * * * *')
  radioactiveContaminationCron() {
    this.radioactiveContamination();
  }

  externaEnvironmentalConditions() {
    const externalEnvironmentalConditions = {
      airQuality: {
        co2: randomUnits(200, 400, 'ppb'),
        so2: randomUnits(1, 5, 'ppb'),
        nox: randomUnits(5, 15, 'ppb'),
        pm25: randomUnits(10, 20, 'µg/m³'),
        o3: randomUnits(30, 40, 'ppb'),
        aqi: 'Moderate',
      },
      weather: {
        temperature: randomUnits(20, 25, '°C'),
        humidity: randomUnits(60, 70, '%'),
        precipitation: randomUnits(0, 0.5, 'inches'),
        windSpeed: randomUnits(10, 15, 'mph'),
        atmosphericPressure: randomUnits(905, 1015, 'hPa'),
        solarRadiation: randomUnits(700, 750, 'W/m²'),
      },
      waterQuality: {
        waterTemperature: randomUnits(20, 25, '°C'),
        pH: randomUnits(7.5, 8.8, 'pH'),
        dissolvedOxygen: randomUnits(8, 10, 'mg/L'),
        nitrateConcentration: randomUnits(5, 10, 'mg/L'),
        phosphateConcentration: randomUnits(5, 10, 'mg/L'),
        mercuryLevel: randomUnits(0.5, 1, 'µg/L'),
      },
      resourceUsage: {
        waterConsumption: randomUnits(9000, 10000, 'm³/day'),
        energyConsumption: randomUnits(1000, 1500, 'MWh/day'),
        wasteGeneration: randomUnits(100, 200, 'kg/day'),
        landUseChange: randomUnits(0.5, 1, 'acres/day'),
      },
    };

    const record = new MqttRecordBuilder(externalEnvironmentalConditions)
      .setQoS(1)
      .build();
    this.client
      .send('externalEnvironmentalConditions-out', record)
      .subscribe((res) => {
        console.log(
          `Response externalEnvironmentalConditions output: < ${res} >`,
        );
      });
  }

  @Cron('* * * * * *')
  externaEnvironmentalConditionsCron() {
    console.log('externaEnvironmentalConditionsCron');
    this.externaEnvironmentalConditions();
  }
}
