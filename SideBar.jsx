import React from "react";
import { BiHomeAlt } from "react-icons/bi";
import { BiDownload } from "react-icons/bi";
import { BsPlusLg } from "react-icons/bs";
import { AiFillFire } from "react-icons/ai";
import { RiMoreFill } from "react-icons/ri";
const tooltipClass = "tooltip group-hover:scale-100";
const SideBar = () => {
  return (
    <div
      className=" fixed  min-h-screen w-screen
     bg-gray-600"
    >
      <div className="flex fixed top-0 left-0 min-h-screen flex-col bg-gray-700 text-white shadow-lg min-w-max px-4">
        <div className="relative group">
          <BiHomeAlt className="sidebar-icon" />
          <span className={tooltipClass}>Home</span>
        </div>
        <div className="relative group">
          <AiFillFire className="sidebar-icon" />
          <span className={tooltipClass}>Trending</span>
        </div>
        <div className="relative group">
          <BsPlusLg className="sidebar-icon" />
          <span className={tooltipClass}>Add</span>
        </div>
        <div className="relative group">
          <BiDownload className="sidebar-icon" />
          <span className={tooltipClass}>Download</span>
        </div>
        <div className="relative group">
          <RiMoreFill className="sidebar-icon" />
          <span className={tooltipClass}>More</span>
        </div>
      </div>
      <div className="flex  items-center justify-center">
        <div className="text-right text-8xl font-mono">Its show time...</div>
      </div>
    </div>
  );
};

export default SideBar;
