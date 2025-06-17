import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div className="fixed w-screen bg-base text-white gap-1 md:gap-10 px-2 z-50 md:px-20 py-4 shadow-sm flex justify-between items-center ">
      <Link href={"/"}>
        <h1 className="text-2xl text-blue-600 font-bold cursor-pointer">
          UniHive
        </h1>
      </Link>
      <ul className="flex gap-8 justify-between items-center right-0">
        <Link href="/">
          <p className="text-base font-normal hover:text-blue-500 cursor-pointer">
            Home
          </p>
        </Link>
        <Link href="/resources">
          <p className="text-base font-normal hover:text-blue-500 cursor-pointer">
            Resources
          </p>
        </Link>
        <Link href="/hackathons">
          <p className="text-base font-normal hover:text-blue-500 cursor-pointer">
            Hackathons
          </p>
        </Link>
        <Link href="/community">
          <p className="text-base font-normal hover:text-blue-500 cursor-pointer">
            Community
          </p>
        </Link>
      </ul>
    </div>
  );
}
