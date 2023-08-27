import { FC } from 'react';

export interface MeasurementProps {
  name: string;
  value?: number;
  unit?: string;
  children?: React.ReactNode;
}
const MeasurementComponent: FC<MeasurementProps> = ({
  name,
  value,
  unit,
  children,
}) => {
  return (
    <div className='measurement-card '>
      <h2>{name}</h2>
      <div>{children}</div>
      {value && (
        <p>
          Value: {value} {unit}
        </p>
      )}
    </div>
  );
};

export default MeasurementComponent;
