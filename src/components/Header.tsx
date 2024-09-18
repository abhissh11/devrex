import React from "react";

export default function Header() {
  return (
    <div className="px-10 py-4 border-b-2 flex justify-between items-center ">
      <h1 className="text-2xl font-bold">Devrex</h1>
      <div className="flex gap-8 justify-between items-center right-0">
        <h2>Home</h2>
        <h2>Resources</h2>
        <h2>About</h2>
      </div>
    </div>
  );
}
