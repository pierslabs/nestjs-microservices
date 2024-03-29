import { FC } from 'react';

export interface GridItemWraperProps {
  children: React.ReactNode;
}

const GridItemWraper: FC<GridItemWraperProps> = ({ children }) => {
  return (
    <div className='w-full h-full p-5 btn-gradient-1 bg-black'>{children}</div>
  );
};

export default GridItemWraper;
