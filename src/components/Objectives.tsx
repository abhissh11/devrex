import React from "react";
import { FileStack, Hourglass, MoveRight, TrainTrack } from "lucide-react";
import Link from "next/link";

export default function Objectives() {
  const features = [
    {
      icon: <FileStack size={32} />,
      title: "Diverse Resources",
      description:
        "Curated learning materials, tutorials, and documentation for your college and beyond journey.",
    },
    {
      icon: <Hourglass size={32} />,
      title: "Hackathons",
      description:
        "Participate in exciting challenges and showcase your innovation skills.",
    },
    {
      icon: <TrainTrack size={32} />,
      title: "Community",
      description:
        "Connect with like-minded tech enthusiasts and build your network.",
    },
    {
      icon: <TrainTrack size={32} />,
      title: "AI Insights",
      description:
        "Personalized recommendations and insights powered by advanced AI.",
    },
  ];
  return (
    <div className="h-fit bg-white text-black flex flex-col justify-start py-10 items-center gap-20">
      <div className="flex flex-col gap-4 justify-center items-center">
        <h3 className="text-4xl font-bold tracking-wide text-blue-600 text-center">
          Powerful Features
        </h3>
        <p className="text-lg font-normal text-gray-700 text-center">
          Discover the tools and resources that make UniHive unique
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-center gap-5 items-center">
        {features.map((feat, index) => (
          <div
            key={index}
            className="group cursor-pointer bg-zinc-100 text-black shadow-md  p-6 w-72 min-h-72  rounded-xl overflow-hidden hover:-translate-y-1 transition-all duration-100 hover:bg-blue-200"
          >
            <h1 className="text-slate-100 m-1 p-3 w-fit  bg-blue-600 rounded group-hover:bg-blue-800">
              {feat.icon}
            </h1>
            <div className="flex flex-col gap-4 mt-10 justify-center items-center">
              <h1 className="text-xl font-semibold text-black text-center">
                {feat.title}
              </h1>
              <p className="text-slate-800 font-normal text-base">
                {feat.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="">
        <Link href="/resources"></Link>
        <button className=" group bg-blue-500 text-gray-100 text-lg font-semibold py-3 px-6 flex gap-2 rounded-lg">
          Explore More Features{" "}
          <span className="group-hover:-rotate-45 transition-all duration-100 text-xl">
            <MoveRight />
          </span>
        </button>
      </div>
    </div>
  );
}
