import React from 'react';

const SkeletonCard = () => {
  return (
    <div className="px-2 cursor-pointer">
      <div className="w-full h-96 bg-gray-700 rounded animate-pulse"></div>
    </div>
  );
};

export default SkeletonCard;
