import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav className="">
      <ul className="flex justify-around items-center py-5 ">
        <div className="w-1/6 flex items-center justify-center ">
          <h1 className="text-4xl text-center text-white">YusinaApp</h1>
        </div>
        <div className="w-2/6 justify-around flex ">
          <li className="text-white hover:text-black hover:border-b hover:border-black ease-linear duration-300">
            <Link className="nav-li" to="/">
              Beranda
            </Link>
          </li>
          <li className="text-white hover:text-black hover:border-b hover:border-black ease-linear duration-300">
            <Link className="nav-li" to="/Materi">
              Materi
            </Link>
          </li>
          <li className="text-white hover:text-black hover:border-b hover:border-black ease-linear duration-300">
            <Link className="nav-li" to="/TipsTriks">
              Tips & Triks
            </Link>
          </li>
          <li className="text-white hover:text-black hover:border-b hover:border-black ease-linear duration-300">
            <Link className="nav-li" to="/Video">
              Video
            </Link>
          </li>
        </div>
      </ul>
    </nav>
  );
}

export default Navigation;
