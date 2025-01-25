import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div className="fixed w-screen bg-base text-white gap-10 px-6 z-50 md:px-20 py-4 shadow-sm flex justify-between items-center ">
      <Link href={"/"}>
        <h1 className="text-2xl font-bold cursor-pointer">
          de
          <span className="text-blue-500">V</span>erse
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
      </ul>
    </div>
  );
}
