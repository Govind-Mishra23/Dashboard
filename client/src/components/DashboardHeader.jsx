import React from "react";
import { Plus, Download, Share2, Upload, ChevronDown } from "lucide-react";
import { Button, IconButton } from "./Button";
import { Avatar } from "./Avatar";

export function DashboardHeader() {
  const teamMembers = [
    { name: "Armin A.", img: "https://i.pravatar.cc/150?u=1" },
    { name: "Eren Y.", img: "https://i.pravatar.cc/150?u=2" },
    { name: "Mikasa A.", img: "https://i.pravatar.cc/150?u=3" },
  ];

  return (
    <div className="flex flex-col gap-5 mb-6">
      {/* Top Action Row */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex items-center gap-2 flex-wrap">
          <Button
            variant="secondary"
            size="icon"
            className="rounded-full w-9 h-9 border border-dashed border-slate-300 bg-transparent text-slate-400 hover:text-slate-600 hover:border-slate-400 flex-shrink-0"
          >
            <Plus size={18} />
          </Button>

          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className="flex items-center bg-white rounded-full p-1 pr-3 border border-slate-100 shadow-sm cursor-pointer hover:border-slate-200 transition-colors gap-2 overflow-hidden"
            >
              <Avatar
                size="sm"
                alt={member.name}
                src={member.img}
                className="w-7 h-7 object-cover flex-shrink-0"
              />
              <span className="text-xs font-medium text-slate-600 truncate min-w-0">
                {member.name}
              </span>
            </div>
          ))}

          <div className="w-9 h-9 bg-slate-900 text-white rounded-full flex items-center justify-center cursor-pointer hover:bg-slate-800 transition-colors flex-shrink-0">
            <span className="font-bold text-sm">C</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <IconButton className="w-9 h-9 rounded-full border border-slate-200 bg-white hover:bg-slate-50">
            <Share2 size={15} className="text-slate-500" />
          </IconButton>
          <IconButton className="w-9 h-9 rounded-full border border-slate-200 bg-white hover:bg-slate-50">
            <Download size={15} className="text-slate-500" />
          </IconButton>
          <IconButton className="w-9 h-9 rounded-full border border-slate-200 bg-white hover:bg-slate-50">
            <Upload size={15} className="text-slate-500" />
          </IconButton>
        </div>
      </div>

      {/* Title & Timeframe */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-500">
          New report
        </h1>

        <div className="flex items-center gap-3 flex-wrap">
          <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-full border border-slate-100 shadow-sm">
            <div className="w-9 h-5 bg-slate-200 rounded-full relative cursor-pointer">
              <div className="w-4 h-4 bg-white rounded-full absolute top-0.5 left-0.5 shadow-sm transition-all"></div>
            </div>
            <span className="text-xs font-medium text-slate-600">
              Timeframe
            </span>
          </div>

          <button className="flex items-center gap-2 bg-white px-4 py-2 rounded-full text-xs font-medium border border-slate-100 shadow-sm text-slate-600 hover:bg-slate-50 transition-colors">
            Sep 1 – Nov 30, 2023
            <ChevronDown size={14} className="text-slate-400" />
          </button>
        </div>
      </div>
    </div>
  );
}
