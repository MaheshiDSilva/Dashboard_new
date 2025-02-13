/* eslint-disable */
import { useState } from "react";
import {Settings, ChevronDown } from "lucide-react";
import {LuListFilter,LuSearch,LuCirclePlus,LuChevronDown,LuEllipsisVertical, LuCircleHelp, LuClipboardCheck, LuFlag, LuFolderClosed, LuLayoutGrid} from "react-icons/lu";
import {BsClipboardCheck,BsPlusCircle,BsBell} from "react-icons/bs";
import image from "../assets/logo.png";
import user from "../assets/user.png";

export default function MilestonesDashboard() {
  const [isOpen, setIsOpen] = useState(false);
  const projects = ["Project 1", "Project 2", "Project 3"];

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-[#1E3A5F] text-white p-4 flex flex-col">
        <div className="flex items-center mb-6">
          <img src={image} alt="Logo" className="h-20" />
        </div>
        <nav className="flex-1">
          <div className="relative inline-block text-left mb-9">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center justify-between w-56 px-4 py-2 text-white bg-[#1E3A5F] border border-white rounded-md focus:outline-none"
            >
              Select Project
              <ChevronDown className="w-4 h-4 ml-2" />
            </button>

            {isOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
                {projects.map((project, index) => (
                  <button
                    key={index}
                    className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
                    onClick={() => {
                      setIsOpen(false);
                      alert(`Selected: ${project}`);
                    }}
                  >
                    {project}
                  </button>
                ))}
              </div>
            )}
          </div>
          <nav className="flex flex-col gap-3">
            <a
              href="#"
              className="flex items-center gap-3 p-2 pl-4 hover:bg-[#376389] rounded-lg text-xl"
            >
              <LuLayoutGrid/> Overview
            </a>
            <a
              href="#"
              className="flex items-center gap-3 p-2 pl-4 hover:bg-[#376389] rounded-lg text-xl"
            >
              <LuFolderClosed /> Project Repository
            </a>
            <a
              href="#"
              className="flex items-center gap-3 p-2 pl-4 bg-[#376389] rounded-lg text-xl"
            >
              <LuFlag /> Milestones
            </a>
            <a
              href="#"
              className="flex items-center gap-3 p-2 pl-4 hover:bg-[#376389] rounded-lg text-xl"
            >
              <LuClipboardCheck /> Runs & Results
            </a>
            <a
              href="#"
              className="flex items-center gap-3 p-2 pl-4 hover:bg-[#376389] rounded-lg text-xl"
            >
              <LuCircleHelp /> Issues
            </a>
          </nav>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 bg-white">
        {/* Top Panel */}
        <div className="flex justify-between items-center bg-[#1E3A5F] p-4">
          <div className="flex bg-[#1E3A5F] rounded-full border border-blue-500">
            <button className="px-4 py-2 bg-[#1E90FF] text-white rounded-full">
              All Projects
            </button>
            <button className="px-4 py-2 text-[#1E90FF]">My Activity</button>
          </div>
          <div className="flex items-center gap-8 pr-3">
            <BsBell className="w-7 h-7 cursor-pointer text-white" />
            <Settings className="w-7 h-7 cursor-pointer text-white" />
            <img src={user} alt="Logo" className="h-10" />
            {/* <User className="w-8 h-8 rounded-full border cursor-pointer text-white" /> */}
            <button className="flex items-center bg-[#D90B0E] text-white px-7 py-2 rounded-lg">Logout</button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex-1 bg-white p-6">
          <h1 className="text-xl font-semibold pb-6 text-[#2B2B2B]">
            Project XYZ &gt; Milestones
          </h1>

          <div className="flex bg-[#E0E7EF] p-1 rounded-full border border-[#8CC6FF] w-fit">
            <button className="px-4 py-2 bg-white text-[#2B2B2B] rounded-full shadow-sm font-normal">
              Current Milestones
            </button>
            <button className="px-4 py-2 text-[#2B2B2B]">
              Completed Milestones
            </button>
          </div>
          <div className="mt-4 flex justify-between items-center">
            <div className="flex items-center space-x-4">
              
              <div className="flex items-center border border-[#A3A3A3] rounded-lg pl-4 pr-10 py-2">
                <LuSearch></LuSearch>
                <input
                  type="text"
                  placeholder="Search test case"
                  className="ml-2 outline-none text-gray-700"
                />
              </div>
              <button className="flex items-center bg-[#1E90FF] text-white px-4 py-2 rounded-lg">
                <LuListFilter className="w-5 h-5 mr-2" />
                Filter
              </button>
            </div>
            <button className="flex items-center bg-[#1E90FF] text-white px-4 py-2 rounded-lg">
              <BsPlusCircle className="w-5 h-5 mr-2"></BsPlusCircle>
              Add Milestone
            </button>
          </div>

          {/* Milestones Table */}
          <div className="bg-white mt-4 ">
            <div className="overflow-x-auto border-[#D8D8D8] rounded-lg">
              <table className="min-w-full border rounded-lg">
                <thead className="bg-white text-[#656565] rounded-lg ">
                  <tr className="text-left text-[#656565] font-light">
                    <th className="p-3">Milestone</th>
                    <th className="p-3">Type</th>
                    <th className="p-3">Time Period</th>
                    <th className="p-3">State</th>
                    <th className="p-3">Progress</th>
                    <th className="p-3"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="p-3 flex items-center space-x-2">
                      <span className="text-xl text-[#656565] pr-2">
                        <LuCirclePlus />
                      </span>
                      <span className="text-2xl text-[#2B2B2B]">
                        <LuChevronDown />
                      </span>
                      <span className="text-green-600 text-xl">
                        <BsClipboardCheck />
                      </span>
                      <span>Milestone 1</span>
                      <span className="text-[#D90B0E] text-sm">
                        5 days to expire
                      </span>
                    </td>
                    <td className="p-3">Release</td>
                    <td className="p-3">18 Feb - 20 Aug</td>
                    <td className="p-3">
                      <span className="bg-[#CDFFD8] text-[#2B2B2B] px-2 py-1 rounded">
                        Active
                      </span>
                    </td>
                    <td className="p-3 ">
                      <div className="flex items-center space-x-2">
                        <div className="w-40 h-3 bg-gray-300 rounded-full relative overflow-hidden">
                          <div
                            className="absolute left-0 top-0 h-full bg-green-600"
                            style={{ width: "60%" }}
                          ></div>
                          <div
                            className="absolute left-[60%] top-0 h-full bg-red-600"
                            style={{ width: "15%" }}
                          ></div>
                        </div>
                        <span className="text-[#2B2B2B] font-semibold">
                          75%
                        </span>
                      </div>
                    </td>
                    <td className="pl-6 pb-1">
                      <span>
                        <LuEllipsisVertical />
                      </span>
                    </td>
                  </tr>

                  <tr className="border-t">
                    <td className="p-3 flex items-center space-x-2 pl-8">
                      <span className="text-xl text-[#656565] pr-2">
                        <LuCirclePlus />
                      </span>
                      <span className="text-2xl text-[#2B2B2B]">
                        <LuChevronDown />
                      </span>
                      <span className="text-[#FFA500] text-xl">
                        <BsClipboardCheck />
                      </span>
                      <span>Milestone 1.1</span>
                    </td>
                    <td className="p-3">Feature</td>
                    <td className="p-3">15 May - 17 Jun</td>
                    <td className="p-3">
                      <span className="bg-[#FDDA9B] text-[#2B2B2B] px-2 py-1 rounded">
                        New
                      </span>
                    </td>
                    <td className="p-3">
                      <div className="flex items-center space-x-2">
                        <div className="w-40 h-3 bg-gray-300 rounded-full relative overflow-hidden"></div>
                        <span className="text-[#2B2B2B] font-semibold">0%</span>
                      </div>
                    </td>
                    <td className="pl-6 pb-1">
                      <span>
                        <LuEllipsisVertical />
                      </span>
                    </td>
                  </tr>

                  <tr className="border-t">
                    <td className="p-3 flex items-center space-x-2">
                      <span className="text-xl text-[#656565] pr-2">
                        <LuCirclePlus />
                      </span>
                      <span className="text-2xl text-[#2B2B2B]">
                        <LuChevronDown />
                      </span>
                      <span className="text-[#FFA500] text-xl">
                        <BsClipboardCheck />
                      </span>
                      <span>Milestone 2</span>
                    </td>
                    <td className="p-3">Feature</td>
                    <td className="p-3">10 May - 20 Jun</td>
                    <td className="p-3">
                      <span className="bg-[#FDDA9B] text-[#2B2B2B] px-2 py-1 rounded">
                        New
                      </span>
                    </td>
                    <td className="p-3">
                      <div className="flex items-center space-x-2">
                        <div className="w-40 h-3 bg-gray-300 rounded-full relative overflow-hidden"></div>
                        <span className="text-[#2B2B2B] font-semibold">0%</span>
                      </div>
                    </td>
                    <td className="pl-6 pb-1">
                      <span>
                        <LuEllipsisVertical />
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
