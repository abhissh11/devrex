import React from "react";

const ResourceCardSkeleton: React.FC = () => {
  return (
    <div className="p-6 bg-chase text-white rounded-lg shadow-md hover:shadow-lg duration-100 cursor-pointer hover:-translate-y-1 transition-all">
      <div className="animate-pulse">
        <div className="h-6 bg-gray-400 rounded w-3/4 mb-4"></div>
        <div className="h-4 bg-gray-400 rounded w-full mb-2"></div>
        <div className="h-4 bg-gray-400 rounded w-5/6 mb-4"></div>
        <div className="h-4 bg-gray-400 rounded w-1/2"></div>
      </div>
    </div>
  );
};

export default ResourceCardSkeleton;
