import { FC } from 'react';
import MeasurementComponent from '../measurement/Measurement';
import GridItemWraper from '../../common/gridItemWrappr/GridItemWraper';

const ExternalEnvironmentalConditions: FC = () => {
  return (
    <GridItemWraper>
      <div className='measurement-container'>
        <MeasurementComponent name='Condiciones Ambientales Externas' />
      </div>
    </GridItemWraper>
  );
};

export default ExternalEnvironmentalConditions;
