import { FC } from 'react';

export interface GridItemWraperProps {
  children: React.ReactNode;
}

const GridItemWraper: FC<GridItemWraperProps> = ({ children }) => {
  return (
    <div className='border w-full h-full p-5 overflow-hidden'>{children}</div>
  );
};

export default GridItemWraper;
