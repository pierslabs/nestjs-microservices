import { FC, useEffect, useState } from 'react';
import MeasurementComponent from '../measurement/Measurement';
import GridItemWraper from '../../common/gridItemWrappr/GridItemWraper';
import useMqtt from '../../../hooks/mqtt/useMqtt';

const ExternalEnvironmentalConditions: FC = () => {
  const { data } = useMqtt({
    subscription: 'externalEnvironmentalConditions-out',
  });

  const [externalEnvironmentData, setExternalEnvironmentData] = useState({
    airQuality: {
      co2: 0,
      so2: 0,
      nox: 0,
      pm25: 0,
      o3: 0,
      aqi: 0,
    },
    weather: {
      temperature: 0,
      humidity: 0,
      precipitation: 0,
      windSpeed: 0,
      atmosphericPressure: 0,
      solarRadiation: 0,
    },
    waterQuality: {
      waterTemperature: 0,
      pH: 0,
      dissolvedOxygen: 0,
      nitrateConcentration: 0,
      phosphateConcentration: 0,
      mercuryLevel: 0,
    },
    resourceUsage: {
      waterConsumption: 0,
      energyConsumption: 0,
      wasteGeneration: 0,
      landUseChange: 0,
    },
  });

  const airQuality = externalEnvironmentData?.airQuality || {
    co2: { unit: 'ppb', value: 0 },
    so2: { unit: 'ppb', value: 0 },
    nox: { unit: 'ppb', value: 0 },
    pm25: { unit: 'µg/m³', value: 0 },
    o3: { unit: 'ppb', value: 0 },
    aqi: 'Unknown', // o un valor por defecto apropiado
  };

  const weather = externalEnvironmentData?.weather || {
    temperature: { unit: '°C', value: 0 },
    humidity: { unit: '%', value: 0 },
    precipitation: { unit: 'inches', value: 0 },
    windSpeed: { unit: 'mph', value: 0 },
    atmosphericPressure: { unit: 'hPa', value: 0 },
    solarRadiation: { unit: 'W/m²', value: 0 },
  };

  console.log(data);
  useEffect(() => {
    if (data?.pattern === 'externalEnvironmentalConditions-out') {
      setExternalEnvironmentData(
        data.data as unknown as typeof externalEnvironmentData
      );
    }
  }, [data]);

  return (
    <GridItemWraper>
      <div className='measurement-container max-h-full overflow-y-auto'>
        <MeasurementComponent name='External Environmental Conditions' />

        <div className='flex flex-wrap justify-between'>
          <div className='mb-6 w-1/2'>
            <h3 className='text-lg font-semibold mb-2 text-indigo-500'>
              Air Quality
            </h3>
            <ul>
              <li className='m-2'>
                CO2: {Number(airQuality.co2?.value).toFixed(3)}{' '}
                {airQuality.co2?.unit}
              </li>
              <li className='m-2'>
                SO2: {Number(airQuality.so2?.value).toFixed(3)}{' '}
                {airQuality.so2?.unit}
              </li>
              <li className='m-2'>
                NOx: {Number(airQuality.nox?.value).toFixed(3)}{' '}
                {airQuality.nox?.unit}
              </li>
              <li className='m-2'>
                PM2.5: {Number(airQuality.pm25?.value).toFixed(3)}{' '}
                {airQuality.pm25?.unit}
              </li>
              <li className='m-2'>
                O3: {Number(airQuality.o3?.value).toFixed(3)}{' '}
                {airQuality.o3?.unit}
              </li>
              <li className='m-2'>AQI: {airQuality.aqi}</li>
            </ul>
          </div>

          <div className='mb-6 w-1/2'>
            <h3 className='text-lg font-semibold mb-2 text-indigo-500'>
              Weather
            </h3>
            <ul>
              <li className='m-2'>
                Temperature: {Number(weather.temperature?.value).toFixed(3)}
                {weather.temperature?.unit}
              </li>
              <li className='m-2'>
                Humidity: {Number(weather.humidity?.value).toFixed(3)}{' '}
                {weather.humidity?.unit}
              </li>
              <li className='m-2'>
                Precipitation: {Number(weather.precipitation?.value).toFixed(3)}{' '}
                {weather.precipitation?.unit}
              </li>
              <li className='m-2'>
                Wind Speed: {Number(weather.windSpeed?.value).toFixed(3)}{' '}
                {weather.windSpeed?.unit}
              </li>
              <li className='m-2'>
                Atmospheric Pressure:{' '}
                {Number(weather.atmosphericPressure?.value).toFixed(3)}{' '}
                {weather.atmosphericPressure?.unit}
              </li>
              <li className='m-2'>
                Solar Radiation:{' '}
                {Number(weather.solarRadiation?.value).toFixed(3)}{' '}
                {weather.solarRadiation?.unit}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </GridItemWraper>
  );
};

export default ExternalEnvironmentalConditions;
