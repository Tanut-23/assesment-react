import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Nav() {
  return (
    <div className="bg-[#e8e8e8] w-screen h-screen">
      <nav className="border-b-[4px] flex gap-8 font-bold text-3xl justify-end py-8 pr-[80px]">
        <Link
          to="/home"
          className="hover:text-yellow-400 hover:cursor-pointer"
          onClick={() => setContent("home")}
        >
          Home
        </Link>
        <Link
          to="/owner"
          className="hover:text-yellow-400 hover:cursor-pointer"
          onClick={() => setContent("owner")}
        >
          Owner
        </Link>
      </nav>
      <Outlet />
    </div>
  );
}
