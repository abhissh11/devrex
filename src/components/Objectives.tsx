import React from "react";
import { BinaryIcon, FileStack, Hourglass, TrainTrack, X } from "lucide-react";

export default function Objectives() {
  const features = [
    {
      icon: <FileStack size={32} />,
      title: "Diverse Resources",
      description:
        "Effortlessly search and explore the resources you need at one place.",
    },
    {
      icon: <Hourglass size={32} />,
      title: "Saves Time",
      description:
        "No more searching all over internet for the resources you need, be it blogs or videos.",
    },
    {
      icon: <TrainTrack size={32} />,
      title: "Track Progress",
      description:
        "Monitor the progress of applications at every stage with time.",
    },
  ];
  return (
    <div className="h-fit bg-base text-white flex flex-col justify-start py-10 items-center gap-20">
      <div className="flex flex-col gap-4 justify-center items-center">
        <h3 className="text-3xl font-bold tracking-wide text-gray-100 text-center">
          Core Features
        </h3>
        <p className="text-lg font-normal text-gray-400 text-center">
          Key objectives and features of deverse
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-center gap-10 items-center">
        {features.map((feat, index) => (
          <div
            key={index}
            className="group cursor-pointer bg-chase  p-6 w-72 min-h-72  rounded-xl overflow-hidden hover:bg-zinc-900"
          >
            <h1 className="text-slate-100 m-1 p-3 w-fit  bg-zinc-900 rounded group-hover:bg-zinc-800">
              {feat.icon}
            </h1>
            <div className="flex flex-col gap-4 mt-10 justify-center items-center">
              <h1 className="text-xl font-semibold text-slate-200 text-center">
                {feat.title}
              </h1>
              <p className="text-slate-400 font-normal text-base">
                {feat.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
