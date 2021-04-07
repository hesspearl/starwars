import React from "react";
import Link from "next/link";

const Nav = () => {
  return (
    <div className="py-4 px-8 bg-gray-700 text-white flex justify-between ">
      <div className="text-lg">
        <Link href="/">StarWars API</Link>
      </div>
      <div className="flex Items-center">
        <div className="ml-8">
          <Link href="/people">people</Link>
        </div>
        <div className="ml-8">
          <Link href="/planets">plants</Link>
        </div>
        <div className="ml-8">
          <Link href="/vehicles">vehicles</Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
