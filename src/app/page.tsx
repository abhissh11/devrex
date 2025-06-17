import FeatResource from "@/components/FeatResource";
import Objectives from "@/components/Objectives";
import Cta from "@/components/Cta";
import { Ripple } from "@/components/ui/ripple";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="z-10 bg-base min-h-[80svh] w-full py-20 text-white px-6 md:px-20 flex flex-col justify-center items-center">
        <div className="relative flex flex-col h-full py-20  w-full overflow-hidden md:w-2/3 gap-8 justify-center items-center">
          <h1 className="text-3xl font-bold tracking-wide text-center">
            Diverse Resources, One Platform
          </h1>
          <h4 className="text-5xl font-bold tracking-wide text-blue-500">
            UniHive
          </h4>
          <p className="text-lg font-normal text-gray-400 text-center">
            Discover and Join a thriving community of tech enthusiasts, access
            curated resources, and participate in exciting hackathons powered by
            AI-driven insights.
          </p>
          <Link href={"/resources"}>
            <button className="group flex items-center gap-2 text-lg font-normal px-6 py-3 rounded-full bg-blue-600 text-white text-center hover:bg-blue-700">
              Explore resources now{" "}
              <span className="group-hover:rotate-45 transition-all bg-white rounded-full p-2 text-blue-600">
                <ArrowUpRight size={20} />
              </span>
            </button>
          </Link>
          <Ripple />
        </div>
      </div>
      <Objectives />
      <FeatResource />
      <Cta />
    </>
  );
}
