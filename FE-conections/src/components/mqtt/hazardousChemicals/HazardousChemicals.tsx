import { FC } from 'react';
import MeasurementComponent from '../measurement/Measurement';
import GridItemWraper from '../../common/gridItemWrappr/GridItemWraper';

const HazardousChemicals: FC = () => {
  // Add your logic to find the measurement for hazardous chemicals

  return (
    <GridItemWraper>
      <MeasurementComponent
        name='Presencia de Gases o Químicos Peligrosos'
        value={78}
        unit={'%'}
      />
    </GridItemWraper>
  );
};

export default HazardousChemicals;
