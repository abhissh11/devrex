"use client";
import Dashboard from "@/components/Dashboard";
import SearchBox from "@/components/SearchBox";
import { ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import resourcesData from "@/app/data/resources-types.json";
import { Technologies } from "../../../types/Technologies";
import { useRouter } from "next/navigation";

export default function Page() {
  const [showDash, setShowDash] = useState(false);
  const [selectedCategory, setSelectedCategory] =
    useState<keyof Technologies>("frontend");
  const chevronRef = useRef<HTMLDivElement>(null);
  const [sidebarHeight, setSidebarHeight] = useState(0);

  const handleClick = () => {
    setShowDash((prev) => !prev);
  };

  // Handle category selection
  const handleSelectCategory = (category: keyof Technologies) => {
    setSelectedCategory(category);
    setShowDash(false);
  };

  // Get the selected category data from the JSON
  const selectedCategoryData = resourcesData.technologies[selectedCategory];

  const router = useRouter();

  // Calculate sidebar height on window resize
  useEffect(() => {
    const updateSidebarHeight = () => {
      if (chevronRef.current) {
        const chevronRect = chevronRef.current.getBoundingClientRect();
        const remainingHeight = window.innerHeight - chevronRect.bottom;
        setSidebarHeight(remainingHeight);
      }
    };

    updateSidebarHeight();
    window.addEventListener("resize", updateSidebarHeight);
    return () => window.removeEventListener("resize", updateSidebarHeight);
  }, []);

  return (
    <div className="bg-base min-h-[100svh] pb-20 w-full text-white flex flex-col md:flex-row">
      {/* Sidebar for larger screens */}
      <div className="hidden md:block fixed h-screen z-50 w-1/5">
        <Dashboard onSelectCategory={handleSelectCategory} />
      </div>

      {/* Main Content */}
      <div className="flex-grow relative w-full md:w-4/5 bg-base pt-16 px-6 md:ml-[20%]">
        <SearchBox />

        <div
          ref={chevronRef}
          className="bg-chase py-2 px-4 rounded-lg md:hidden flex justify-between items-center mt-4"
        >
          <p>Toggle Dashboard Here..</p>
          {showDash ? (
            <ChevronDown
              size={36}
              onClick={handleClick}
              className="cursor-pointer bg-base p-2 rounded-lg rotate-180"
            />
          ) : (
            <ChevronDown
              size={36}
              onClick={handleClick}
              className="cursor-pointer bg-base p-2 rounded-lg"
            />
          )}
        </div>

        {/* Toggleable Sidebar for Small Screens */}
        {showDash && (
          <div
            className="fixed left-0 w-full sm:w-3/5 bg-base rounded-lg shadow-lg z-50 overflow-y-auto"
            style={{
              top: chevronRef.current?.getBoundingClientRect().bottom,
              height: sidebarHeight,
            }}
          >
            <Dashboard onSelectCategory={handleSelectCategory} />
          </div>
        )}

        {/* Main Content Area */}
        <div className="mt-8">
          <h1 className="text-2xl font-bold">{selectedCategoryData.name}</h1>
          <p className="mt-4">
            Available best resources for {selectedCategoryData.name} are:
          </p>
          {/* Display fetched content */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {selectedCategoryData.stack.map((item, index) => (
              <div
                key={index}
                onClick={() => {
                  try {
                    router.push(`/resources/${item.toLowerCase()}`);
                  } catch (error) {
                    console.error("Navigation error:", error);
                  }
                }}
                className="p-6 bg-chase text-white rounded-lg shadow-md hover:shadow-lg duration-100 cursor-pointer hover:-translate-y-1 transition-all"
              >
                <h2 className="text-xl font-semibold">{item}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
