"use client";
import Dashboard from "@/components/Dashboard";
import SearchBox from "@/components/SearchBox";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function Page() {
  const [showDash, setShowDash] = useState(false);

  const handleClick = () => {
    setShowDash((prev) => !prev);
  };

  return (
    <div className="bg-base min-h-screen w-full text-white flex flex-col md:flex-row">
      {/* Sidebar for larger screens */}
      <div className="hidden md:block w-1/5">
        <Dashboard />
      </div>

      {/* Main Content */}
      <div className="flex-grow relative w-full md:w-4/5 bg-base pt-16 px-6">
        {/* Search Box */}
        <SearchBox />

        {/* Chevron for small screens */}
        <div className="bg-slate-950 py-2 px-4 rounded-lg md:hidden flex justify-end mt-4">
          <ChevronDown
            size={36}
            onClick={handleClick}
            className="cursor-pointer bg-base p-2 rounded-lg"
          />
        </div>

        {/* Toggleable Sidebar for Small Screens */}
        {showDash && (
          <div
            className="absolute top-20 left-0 w-4/5 sm:w-3/5 h-[calc(100vh-5rem)]  p-4 rounded-lg shadow-lg 
            z-50 overflow-y-auto"
          >
            <Dashboard />
          </div>
        )}
      </div>
    </div>
  );
}
