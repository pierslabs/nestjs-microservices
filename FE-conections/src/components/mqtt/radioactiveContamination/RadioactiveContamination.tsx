import { FC, useEffect, useState } from 'react';
import MeasurementComponent from '../measurement/Measurement';
import useMqtt, { Message } from '../../../hooks/mqtt/useMqtt';

const RadioactiveContamination: FC = () => {
  const { data } = useMqtt({ subscription: 'radioactiveContamination-out' });
  const [radioactiveContaminationState, setRadioactiveContaminationState] =
    useState<Message>();

  useEffect(() => {
    if (data?.pattern === 'radioactiveContamination-out') {
      setRadioactiveContaminationState(data);
    }
  }, [data]);

  const contaminationColor = (value: number) => {
    if (value < 0.9) {
      return 'bg-green-600';
    } else if (value >= 0.9 && value < 1.2) {
      return 'bg-orange-600';
    } else if (value >= 1.2 && value < 1.5) {
      return 'bg-red-600';
    }
  };

  const { value, unit } = radioactiveContaminationState?.data ?? {
    value: 0,
    unit: 'mSv/h',
  };

  return (
    <div className='p-5 border w-full h-full '>
      <div className='flex justify-between items-start'>
        <MeasurementComponent
          name='Radioactive Contamination'
          value={(value.toFixed(5) as unknown as number) || 0}
          unit={unit || 'mSv/h'}
        />
        <div
          className={` w-5 h-5 rounded-full ${contaminationColor(value)} `}
        />
      </div>
    </div>
  );
};

export default RadioactiveContamination;
