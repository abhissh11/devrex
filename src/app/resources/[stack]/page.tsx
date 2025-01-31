"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { MoveUpLeft } from "lucide-react";
import Link from "next/link";

interface Resource {
  name: string;
  description: string;
  link: string;
}

export default function StackPage() {
  const params = useParams();
  const stack = Array.isArray(params.stack) ? params.stack[0] : params.stack;

  // Explicitly define state as an array of Resource or null
  const [data, setData] = useState<Resource[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (stack) {
      fetch(`/api/resources?category=${stack.toUpperCase()}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error("Failed to fetch resources");
          }
          return res.json();
        })
        .then((data: Resource[]) => {
          setData(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching resources:", error);
          setError(error.message);
          setLoading(false);
        });
    }
  }, [stack]);

  if (loading)
    return (
      <div className="bg-base flex justify-center items-center h-screen">
        <p className="text-center text-white mt-10">Loading...</p>;
      </div>
    );
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;
  if (!data || data.length === 0)
    return (
      <div className="bg-base flex flex-col gap-8 justify-center items-center py-40 h-screen">
        <p className="text-center text-lg mt-10 text-white">
          No resources found.
        </p>
        <Link href={"/resources"}>
          <button className="text-lg text-white bg-chase flex gap-1 items-center rounded-lg px-4 py-2 md:px-6 md:py-3 group ">
            <span className="bg-blue-500 p-1 rounded-full group-hover:-rotate-45 group-hover:bg-blue-600 transition-all duration-100">
              <MoveUpLeft />
            </span>
            Go to Dashboard
          </button>
        </Link>
      </div>
    );

  return (
    <div className="bg-base min-h-screen py-20 px-6 md:px-28 text-white p-6">
      <div className="flex justify-between gap-2 items-center">
        <h1 className="text-3xl text-white font-bold capitalize">
          {stack} Resources
        </h1>
        <Link href={"/resources"}>
          <button className="text-lg bg-chase flex gap-1 items-center rounded-lg px-4 py-2 md:px-6 md:py-3 group ">
            <span className="bg-blue-500 p-1 rounded-full group-hover:-rotate-45 group-hover:bg-blue-600 transition-all duration-100">
              <MoveUpLeft />
            </span>
            Go to Dashboard
          </button>
        </Link>
      </div>
      <p className="mt-4">Best resources for {stack}:</p>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {data.map((resource: Resource, index) => (
          <div
            key={index}
            className="p-6 bg-chase text-white rounded-lg shadow-md hover:shadow-lg duration-100 cursor-pointer hover:-translate-y-1 transition-all"
          >
            <h2 className="text-xl font-semibold">{resource.name}</h2>
            <p className="mt-2">{resource.description}</p>
            <a
              href={resource.link}
              target="_blank"
              className="text-blue-400 underline mt-2 block"
              rel="noopener noreferrer"
            >
              View Resource
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
