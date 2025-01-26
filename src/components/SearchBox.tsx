import { SearchCode } from "lucide-react";
import React from "react";

export default function SearchBox() {
  return (
    <div
      className="bg-chase mx-auto px-6 py-6 rounded-lg shadow-md flex flex-col sm:flex-row gap-6 justify-between items-center
          max-w-5xl"
    >
      {/* Welcome Section */}
      <div className="flex flex-col gap-2">
        <h4 className="text-2xl font-bold">Welcome to deVerse</h4>
        <p className="text-base font-normal text-gray-400">
          Your personalized tech learning dashboard
        </p>
      </div>

      {/* Search Section */}
      <div className="flex gap-2 h-12 w-full sm:w-auto items-center px-4 py-2 bg-base rounded-lg shadow-inner">
        <input
          type="text"
          placeholder="Search resources.."
          className="flex-grow bg-transparent text-lg font-normal text-gray-400 outline-none"
        />
        <SearchCode size={24} className="text-gray-400" />
      </div>
    </div>
  );
}
