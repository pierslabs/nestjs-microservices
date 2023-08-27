import MeasurementComponent from '../measurement/Measurement';

const EmergencySystemsAlarms = () => {
  // Add your logic to find the measurement for emergency systems and alarms

  return (
    <div className='measurement-container'>
      <MeasurementComponent
        nombre='Sistemas de Emergencia y Alarmas'
        valor={78}
        unidad={'%'}
      />
    </div>
  );
};

export default EmergencySystemsAlarms;
