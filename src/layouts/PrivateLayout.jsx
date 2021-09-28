import React from 'react';
import Sidebar from 'components/Sidebar';

const PrivateLayout = ({ children }) => {
  return (
    <div className='flex w-screen h-screen'>
      <div className='flex flex-nowrap h-full w-full'>
        <Sidebar />
        <main className='flex w-full bg-gray-300 overflow-y-scroll'>{children}</main>
      </div>
    </div>
  );
};

export default PrivateLayout;
