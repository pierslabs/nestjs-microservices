import { FC, useEffect, useState } from 'react';
import MeasurementComponent from '../measurement/Measurement';
import GridItemWraper from '../../common/gridItemWrappr/GridItemWraper';
import useMqtt from '../../../hooks/mqtt/useMqtt';

const ExternalEnvironmentalConditions: FC = () => {
  const { data } = useMqtt({
    subscription: 'externalEnvironmentalConditions-out',
  });

  const [externalEnvironmentData, setExternalEnvironmentData] = useState();

  useEffect(() => {
    if (data?.pattern === 'externalEnvironmentalConditions-out') {
      setExternalEnvironmentData(
        data.data as unknown as typeof externalEnvironmentData
      );
    }
  }, [data]);

  console.log(externalEnvironmentData);
  return (
    <GridItemWraper>
      <div className='measurement-container max-h-full overflow-y-auto'>
        <MeasurementComponent name='External Environmental Conditions' />

<<<<<<< HEAD
        <div className='flex flex-wrap justify-between'>
          <div className='mb-6 w-1/2'>
=======
        <div className='flex flex-wrap  w-full justify-between '>
          <div className='mb-6'>
>>>>>>> 828c88a281412f71a38e34f59f80017d0ec04f08
            <h3 className='text-lg font-semibold mb-2 text-indigo-500'>
              Air Quality
            </h3>
            <ul>
              <li>CO2: {airQuality.co2} ppm</li>
              <li>SO2: {airQuality.so2} ppb</li>
              <li>NOx: {airQuality.nox} ppb</li>
              <li>PM2.5: {airQuality.pm25} µg/m³</li>
              <li>O3: {airQuality.o3} ppb</li>
              <li>AQI: {airQuality.aqi}</li>
            </ul>
          </div>
          <div className='mb-6 w-1/2'>
            <h3 className='text-lg font-semibold mb-2 text-indigo-500'>
              Weather
            </h3>
            <ul>
              <li>Temperature: {weather.temperature} °C</li>
              <li>Humidity: {weather.humidity}%</li>
              <li>Precipitation: {weather.precipitation} inches</li>
              <li>Wind Speed: {weather.windSpeed} mph</li>
              <li>Atmospheric Pressure: {weather.atmosphericPressure} hPa</li>
              <li>Solar Radiation: {weather.solarRadiation} W/m²</li>
            </ul>
          </div>
        </div>

<<<<<<< HEAD
        <div className='flex flex-wrap justify-between'>
          <div className='mb-6 w-1/2'>
=======
        <div className='flex flex-wrap  w-full justify-between w-full'>
          <div className='mb-6 '>
>>>>>>> 828c88a281412f71a38e34f59f80017d0ec04f08
            <h3 className='text-lg font-semibold mb-2 text-indigo-500'>
              Water Quality
            </h3>
            <ul>
              <li>Temperature: {waterQuality.waterTemperature} °C</li>
              <li>pH: {waterQuality.pH}</li>
              <li>Dissolved Oxygen: {waterQuality.dissolvedOxygen} mg/L</li>
<<<<<<< HEAD
              <li>Nitrate : {waterQuality.nitrateConcentration} mg/L</li>
              <li>Phosphate : {waterQuality.phosphateConcentration} mg/L</li>
              <li>Mercury Level: {waterQuality.mercuryLevel} µg/L</li>
=======
              <li>Nitrate: {waterQuality.nitrateConcentration} mg/L</li>
              <li>Phosphate: {waterQuality.phosphateConcentration} mg/L</li>
              <li>Mercury: {waterQuality.mercuryLevel} µg/L</li>
>>>>>>> 828c88a281412f71a38e34f59f80017d0ec04f08
            </ul>
          </div>

          <div className='mb-6 w-1/2'>
            <h3 className='text-lg font-semibold mb-2 text-indigo-500'>
              Resource Usage
            </h3>
            <ul>
              <li>Water : {resourceUsage.waterConsumption} m³/day</li>
              <li>Energy : {resourceUsage.energyConsumption} MWh/month</li>
              <li>W. Generation: {resourceUsage.wasteGeneration} kg/day</li>
              <li>Land Use Change: {resourceUsage.landUseChange} acres/year</li>
            </ul>
          </div>
        </div>
      </div>
    </GridItemWraper>
  );
};

export default ExternalEnvironmentalConditions;
