import { FC } from 'react';
import PowerLevel from '../../components/mqtt/powerLevel/PowerLevel';
import AirFlowVentilation from '../../components/mqtt/airFlowVentilation/AirFlowVentilation';
import CoolingSystems from '../../components/mqtt/coolingSystems/CoolingSystems';
import EmergencySystemsAlarms from '../../components/mqtt/emergencySystemsAlarms/EmergencySystemsAlarms';
import ExternalEnvironmentalConditions from '../../components/mqtt/externalEnvironmentalConditions/ExternalEnvironmentalConditions';
import FireProtectionSystems from '../../components/mqtt/fireProtectionSystems/FireProtectionSystems';
import HazardousChemicals from '../../components/mqtt/hazardousChemicals/HazardousChemicals';
import NuclearFuelState from '../../components/mqtt/nuclearFuelState/NuclearFuelState';
import PressureTemperature from '../../components/mqtt/pressureTemperature/PressureTemperature';
import Radiation from '../../components/mqtt/radiation/Radiation';
import RadioactiveContamination from '../../components/mqtt/radioactiveContamination/RadioactiveContamination';
import ReactorControlParameters from '../../components/mqtt/reactorControlParameters/ReactorControlParameters';
import './mqtt.styles.css';
export const MQTT: FC = () => {
  return (
    <div className='wrapper'>
      <div className='one'>
        <PowerLevel />
      </div>

      <div className='two'>
        <ExternalEnvironmentalConditions />
      </div>
      <div className='three'>
        <div className='flex flex-col gap-3'>
          <EmergencySystemsAlarms />
          <AirFlowVentilation />
          <RadioactiveContamination />
        </div>
      </div>
      <div className='four'>
        <CoolingSystems />
      </div>
      <div className='five'>
        <FireProtectionSystems />
      </div>
      <div className='six'>
        <NuclearFuelState />
      </div>
      <div className='seven'>
        <HazardousChemicals />
      </div>

      <div className=''>
        <div>
          <Radiation />
          <PressureTemperature />
        </div>
      </div>
      <div>
        <ReactorControlParameters />
      </div>
    </div>
  );
};
