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

export const MQTT: FC = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 items-center p-5'>
      <PowerLevel />
      <div className='flex flex-col h-full gap-3'>
        <EmergencySystemsAlarms />
        <AirFlowVentilation />
        <RadioactiveContamination />
      </div>
      <CoolingSystems />
      <ExternalEnvironmentalConditions />
      <FireProtectionSystems />
      <HazardousChemicals />
      <NuclearFuelState />
      <PressureTemperature />
      <Radiation />
      <ReactorControlParameters />
    </div>
  );
};
