import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full bg-gray-400 bg-opacity-50 flex items-center justify-center">
      <div className="w-6 h-6 border-4 border-gray-100 rounded-full spin"></div>
    </div>
  );
};

export default LoadingSpinner;
