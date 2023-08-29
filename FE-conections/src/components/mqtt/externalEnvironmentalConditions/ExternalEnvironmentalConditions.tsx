import { FC } from 'react';
import MeasurementComponent from '../measurement/Measurement';
import GridItemWraper from '../../common/gridItemWrappr/GridItemWraper';
import { externalEnvironmentData } from '../../../config/fakeData/fakeData';

const ExternalEnvironmentalConditions: FC = () => {
  const { airQuality, weather, waterQuality, resourceUsage } =
    externalEnvironmentData;
  return (
    <GridItemWraper>
      <div className='measurement-container'>
        <MeasurementComponent name='External Environmental Conditions' />

        <div className='flex flex-wrap justify-evenly'>
          <div className='mb-6'>
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
          <div className='mb-6 '>
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

        <div className='flex flex-wrap justify-evenly gap-9'>
          <div className='mb-6'>
            <h3 className='text-lg font-semibold mb-2 text-indigo-500'>
              Water Quality
            </h3>
            <ul>
              <li>Water Temperature: {waterQuality.waterTemperature} °C</li>
              <li>pH: {waterQuality.pH}</li>
              <li>Dissolved Oxygen: {waterQuality.dissolvedOxygen} mg/L</li>
              <li>
                Nitrate Concentration: {waterQuality.nitrateConcentration} mg/L
              </li>
              <li>
                Phosphate Concentration: {waterQuality.phosphateConcentration}{' '}
                mg/L
              </li>
              <li>Mercury Level: {waterQuality.mercuryLevel} µg/L</li>
            </ul>
          </div>
          <div>
            <h3 className='text-lg font-semibold mb-2 text-indigo-500'>
              Resource Usage
            </h3>
            <ul>
              <li>
                Water Consumption: {resourceUsage.waterConsumption} m³/day
              </li>
              <li>
                Energy Consumption: {resourceUsage.energyConsumption} MWh/month
              </li>
              <li>Waste Generation: {resourceUsage.wasteGeneration} kg/day</li>
              <li>Land Use Change: {resourceUsage.landUseChange} acres/year</li>
            </ul>
          </div>
        </div>
      </div>
    </GridItemWraper>
  );
};

export default ExternalEnvironmentalConditions;
