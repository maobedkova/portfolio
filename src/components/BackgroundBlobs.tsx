
import React from 'react';

const BackgroundBlobs: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Abstract blob backgrounds */}
      <div className="absolute top-40 -left-64 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-primary-dark to-primary-light opacity-20 blur-3xl"></div>
      <div className="absolute top-[40%] -right-80 w-[600px] h-[600px] rounded-full bg-gradient-to-tl from-primary to-primary-light opacity-15 blur-3xl"></div>
      <div className="absolute bottom-20 left-40 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-primary-dark to-primary opacity-10 blur-3xl"></div>
    </div>
  );
};

export default BackgroundBlobs;
