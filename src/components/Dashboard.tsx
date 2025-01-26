import Link from "next/link";
import React from "react";

export default function Dashboard() {
  const dash = [
    { items: "DS & Algo", link: "/" },
    { items: "Frontend dev", link: "/" },
    { items: "Backend dev", link: "/" },
    { items: "Deployments", link: "/" },
    { items: "Machine Learning", link: "/" },
    { items: "Artificial Intlg.", link: "/" },
  ];

  return (
    <div className="absolute  md:top-16 top-44 scrollbar-thin scrollbar-corner-slate-400 scrollbar-thumb-gray-500 scrollbar-track-gray-900  left-0 w-full max-w-[70vw] md:max-w-[18vw] h-[70svh] md:h-[90svh]  bg-chase text-white shadow-lg">
      <div
        className=" py-3 px-5 flex flex-col gap-10 justify-between items-start h-full overflow-y-auto max-h-screen
        "
      >
        {/* Navigation Items */}
        <div className="flex flex-col gap-1 w-full">
          {dash.map((it, index) => (
            <Link
              key={index}
              href={it.link}
              className="text-base hover:bg-gray-700 px-4 py-2 rounded-lg w-full"
            >
              {it.items}
            </Link>
          ))}
        </div>

        {/* User Information */}
        <div className="w-full">
          <button className="px-2 py-2 rounded-lg bg-blue-600 w-full text-sm text-center hover:bg-blue-700">
            abc@gmail.com
          </button>
        </div>
      </div>
    </div>
  );
}
