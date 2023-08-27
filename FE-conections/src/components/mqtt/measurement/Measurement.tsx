import { FC } from 'react';

export interface MeasurementProps {
  name: string;
  value: number;
  unit: string;
}
const MeasurementComponent: FC<MeasurementProps> = ({ name, value, unit }) => {
  return (
    <div className='measurement-card'>
      <h2>{name}</h2>
      <p>
        {value} {unit}
      </p>
    </div>
  );
};

export default MeasurementComponent;
