import {
  Book,
  CornerDownRight,
  ListVideo,
  MoveRight,
  Users,
  Video,
} from "lucide-react";
import Link from "next/link";
import React from "react";

export default function FeatResource() {
  const features = [
    {
      icon: <Book size={32} />,
      title: "Learning Tracks",
      description:
        "Curated learning materials, tutorials, and documentation for your college and beyond journey.",
    },
    {
      icon: <ListVideo size={32} />,
      title: "Project Resources",
      description:
        "Participate in exciting challenges and showcase your innovation skills.",
    },
    {
      icon: <Users size={32} />,
      title: "Community Resources",
      description:
        "Connect with like-minded tech enthusiasts and build your network.",
    },
  ];
  return (
    <div className="bg-base h-fit  text-white flex flex-col justify-start py-10 items-center gap-20">
      <div className="flex flex-col gap-4 justify-center items-center">
        <h3 className="text-4xl font-bold tracking-wide text-blue-600 text-center">
          Tech Resources
        </h3>
        <p className="text-lg font-normal text-gray-400 text-center">
          Everything you need to accelerate your tech journey
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-center gap-10 items-center">
        {features.map((feat, index) => (
          <div
            key={index}
            className="group cursor-pointer bg-chase text-gray-200 shadow-md  p-6 w-72 min-h-72  rounded-xl overflow-hidden hover:-translate-y-1 transition-all duration-100 hover:bg-zinc-800"
          >
            <h1 className="text-slate-100 m-1 p-3 w-fit  bg-pink-600 rounded group-hover:bg-pink-700">
              {feat.icon}
            </h1>
            <div className="flex flex-col gap-4 mt-10 justify-center items-center">
              <h1 className="text-xl font-semibold text-gray-100 text-center">
                {feat.title}
              </h1>
              <p className="text-slate-200 font-normal text-base">
                {feat.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="">
        <Link href="/resources">
          <button className=" group bg-pink-500 text-gray-100 text-lg font-semibold py-3 px-6 flex gap-2 rounded-lg">
            Explore Resources Now{" "}
            <span className="group-hover:-rotate-45 transition-all duration-100 text-xl">
              <MoveRight />
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
}
