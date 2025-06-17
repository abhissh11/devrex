import React from "react";
import resourcesData from "@/app/data/resources-types.json"; // Import the JSON file
import { Technologies } from "../../types/Technologies"; // Import the type
import Link from "next/link";

interface DashboardProps {
  onSelectCategory: (category: keyof Technologies) => void;
}

export default function Dashboard({ onSelectCategory }: DashboardProps) {
  const categories = Object.keys(resourcesData.technologies).map((key) => ({
    key: key as keyof Technologies,
    name: resourcesData.technologies[key as keyof Technologies].name,
  }));

  return (
    <div className="absolute md:top-16 scrollbar-thin scrollbar-corner-slate-900 scrollbar-thumb-gray-800 scrollbar-track-gray-900 left-0 w-full max-w-[70vw] md:max-w-[18vw] h-[70svh] md:h-[90svh] bg-chase text-white shadow-lg">
      <div className="py-3 px-5 flex flex-col gap-10 justify-between items-start h-full overflow-y-auto max-h-screen">
        {/* Navigation Items */}
        <div className="flex flex-col gap-1 w-full">
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => onSelectCategory(category.key)}
              className="text-base hover:bg-gray-700 px-4 py-2 rounded-lg w-full text-left"
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* User Information */}
        <div className="w-full">
          <Link href="post-resources">
            <button className="px-2 py-2 rounded-lg bg-blue-600 w-full text-sm text-center hover:bg-blue-700">
              Post Resources
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
