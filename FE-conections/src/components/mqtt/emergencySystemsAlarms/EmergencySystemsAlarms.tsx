import { useState } from 'react';

import MeasurementComponent from '../measurement/Measurement';
import GridItemWraper from '../../common/gridItemWrappr/GridItemWraper';

const EmergencySystemsAlarms = () => {
  const [active, setActive] = useState<boolean>(true);

  const handleActive = () => {
    setActive(!active);
  };

  return (
    <GridItemWraper>
      <div className='flex justify-between items-center w-full h-full'>
        <MeasurementComponent name='Emergency Systems Alarms' />
        <div
          className={` w-5 h-5 rounded-full ${
            active ? 'bg-green-600' : 'bg-red-600'
          } `}
          onClick={handleActive}
        />
      </div>
    </GridItemWraper>
  );
};

export default EmergencySystemsAlarms;
