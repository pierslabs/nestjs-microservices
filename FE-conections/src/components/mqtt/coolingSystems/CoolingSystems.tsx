import { FC, useEffect, useState } from 'react';
import MeasurementComponent from '../measurement/Measurement';
import useMqtt from '../../../hooks/mqtt/useMqtt';

const CoolingSystems: FC = () => {
  const { data } = useMqtt({ subscription: 'coolingSytem-out' });
  const [active, setActive] = useState<number>(0);

  const handleActive = () => {
    setActive(active === 0 ? 100 : 0);
  };
  useEffect(() => {
    if (data?.pattern === 'coolingSytem-out') {
      setActive(data.data.value);
    }
  }, [data]);

  return (
    <div className='p-5 border w-full h-full'>
      <div className='flex justify-between items-center'>
        <MeasurementComponent name='Cooling Systems' />
        <div
          className={` w-5 h-5 rounded-full ${
            active ? 'bg-green-600' : 'bg-red-600'
          } `}
          onClick={handleActive}
        />
      </div>

      <div className='flex justify-center h-52 items-center gap-10 my-6'>
        <h1 className='text-7xl'>{active} %</h1>
      </div>
    </div>
  );
};

export default CoolingSystems;
