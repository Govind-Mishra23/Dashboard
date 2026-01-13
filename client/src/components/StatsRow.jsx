import React from "react";
import { Card } from "./Card";
import { Badge } from "./Badge";
import {
  ChevronRight,
  ChevronDown,
  ArrowUpRight,
  ArrowDownRight,
  Star,
} from "lucide-react";
import { Avatar } from "./Avatar";

export function StatsRow() {
  const bottomStats = [
    {
      id: 1,
      value: "$209,633",
      percent: "39.63%",
      img: "https://i.pravatar.cc/150?u=4",
    },
    {
      id: 2,
      value: "$156,841",
      percent: "29.65%",
      img: "https://i.pravatar.cc/150?u=5",
    },
    {
      id: 3,
      value: "$117,115",
      percent: "22.14%",
      img: "https://i.pravatar.cc/150?u=6",
    },
  ];

  return (
    <div className="flex flex-col gap-4 mb-6 bg-white">
      {/* Top Row: 30%-30%-30% layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 items-stretch">
        {/* 1. Revenue Section - 30% (4 columns) */}
        <div className="sm:col-span-2 lg:col-span-4 flex flex-col justify-center h-[100px] sm:h-[120px] lg:h-[140px]">
          <h3 className="text-base lg:text-lg font-bold text-slate-900 mb-3">
            Revenue
          </h3>
          <div className="flex items-baseline gap-2 mb-2 flex-wrap">
            <span className="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight leading-none">
              $528,976
            </span>
            <span className="text-slate-300 text-xl lg:text-2xl font-semibold">
              .82
            </span>
            <Badge className="bg-[#ff3b6b] text-white px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full text-[9px] sm:text-[10px] lg:text-xs font-bold border-none flex items-center gap-0.5 sm:gap-1 whitespace-nowrap">
              <ArrowUpRight
                size={11}
                strokeWidth={3}
                className="sm:w-3 sm:h-3"
              />{" "}
              7.9%
            </Badge>
            <Badge className="bg-[#ff3b6b] text-white px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full text-[9px] sm:text-[10px] lg:text-xs font-bold border-none whitespace-nowrap">
              $27,335.09
            </Badge>
          </div>
          <p className="text-sm text-black font-medium leading-tight">
            vs prev.{" "}
            <span className="text-black font-semibold">$501,641.73</span>{" "}
            <span className="text-black">Jun 1 - Aug 31, 2023</span>{" "}
            <ChevronDown size={14} className="inline text-black" />
          </p>
        </div>

        {/* 2. Top Sales Card - 15% (2 columns) */}
        <Card className="lg:col-span-2 p-2.5 sm:p-4 lg:p-5 rounded-2xl bg-white shadow-sm border border-slate-100 flex flex-col h-[100px] sm:h-[120px] lg:h-[140px] overflow-hidden">
          <span className="text-[9px] sm:text-[10px] lg:text-xs font-semibold text-slate-400 mb-1 sm:mb-2">
            Top sales
          </span>
          <div className="flex-1 flex items-center min-h-0">
            <div className="text-2xl sm:text-3xl lg:text-5xl font-bold text-slate-900 leading-none">
              72
            </div>
          </div>
          <div className="flex items-center justify-between gap-1 sm:gap-1.5 lg:gap-2 p-0.5 sm:p-1 lg:p-1.5 pl-1 sm:pl-1.5 lg:pl-2 pr-1.5 sm:pr-2 lg:pr-2.5 bg-slate-50 rounded-full border border-slate-100 mt-1 sm:mt-2">
            <div className="flex items-center gap-1 sm:gap-1.5 lg:gap-2 min-w-0 flex-1 overflow-hidden">
              <Avatar
                size="xs"
                className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 border border-white flex-shrink-0 object-cover"
                src="https://i.pravatar.cc/150?u=7"
              />
              <span className="text-[10px] sm:text-xs lg:text-sm font-semibold text-slate-700 truncate min-w-0">
                Mikasa
              </span>
            </div>
            <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-5 lg:h-5 rounded-full bg-white flex items-center justify-center shadow-sm border border-slate-100 cursor-pointer flex-shrink-0">
              <ChevronRight
                size={8}
                className="sm:w-2.5 sm:h-2.5 lg:w-3 lg:h-3 text-slate-400"
              />
            </div>
          </div>
        </Card>

        {/* 3. Best Deal Card - 15% (3 columns) */}
        <Card className="lg:col-span-3 p-4 lg:p-5 rounded-2xl bg-slate-950 text-white border-none flex flex-col justify-between h-[100px] sm:h-[120px] lg:h-[140px] shadow-xl">
          <div className="flex justify-between items-start mb-2">
            <span className="text-xs font-medium text-slate-400">
              Best deal
            </span>
            <Star
              size={13}
              className="text-slate-500 fill-slate-600 flex-shrink-0"
            />
          </div>
          <div className="flex-1 flex flex-col justify-center my-2">
            <div className="text-3xl lg:text-4xl font-bold text-white leading-none">
              $42,300
            </div>
          </div>
          <div className="flex items-center justify-between gap-2 p-1.5 pl-3 pr-2 bg-white/10 rounded-full border border-white/10 overflow-hidden">
            <span className="text-sm font-medium text-slate-200 truncate flex-1 min-w-0">
              Rolf Inc.
            </span>
            <div className="w-5 h-5 rounded-full bg-white text-slate-900 flex items-center justify-center cursor-pointer flex-shrink-0">
              <ChevronRight size={12} strokeWidth={2.5} />
            </div>
          </div>
        </Card>

        {/* 4. Deals Card - equal width */}
        <Card className="lg:col-span-1 flex flex-col items-center justify-center p-2.5 sm:p-3 lg:p-4 rounded-2xl shadow-sm border-2 border-slate-200 bg-white w-full h-[100px] sm:h-[120px] lg:h-[140px] text-center transition-all duration-200 hover:border-[#ff3b6b] hover:shadow-lg active:border-[#ff3b6b] group cursor-pointer">
          <span className="text-[8px] sm:text-[9px] lg:text-[10px] font-bold text-slate-500 uppercase tracking-wide mb-1 sm:mb-1.5 group-hover:text-[#ff3b6b] transition-colors whitespace-nowrap px-1">
            Deals
          </span>
          <div className="bg-slate-200 text-slate-700 rounded-full px-2.5 sm:px-3.5 lg:px-5 py-1 sm:py-1.5 lg:py-2 text-[10px] sm:text-xs lg:text-sm font-bold my-0.5 sm:my-1 group-hover:bg-[#ff3b6b] group-hover:text-white transition-all">
            256
          </div>
          <span className="text-[8px] sm:text-[9px] lg:text-[10px] text-slate-400 font-semibold flex items-center gap-0.5 mt-0.5 sm:mt-1 group-hover:text-slate-500 transition-colors">
            <ArrowDownRight
              size={10}
              strokeWidth={2}
              className="sm:w-3 sm:h-3"
            />{" "}
            5
          </span>
        </Card>

        {/* 5. Value Card - same width as others */}
        <Card className="lg:col-span-1 flex flex-col items-center justify-center p-2.5 sm:p-3 lg:p-4 rounded-2xl shadow-sm border-2 border-slate-200 bg-white w-full h-[100px] sm:h-[120px] lg:h-[140px] text-center transition-all duration-200 hover:border-[#ff3b6b] hover:shadow-lg active:border-[#ff3b6b] group cursor-pointer">
          <span className="text-[8px] sm:text-[9px] lg:text-[10px] font-bold text-slate-500 uppercase tracking-wide mb-1 sm:mb-1.5 group-hover:text-[#ff3b6b] transition-colors whitespace-nowrap px-1">
            Value
          </span>
          <div className="bg-slate-200 text-slate-700 rounded-full px-2.5 sm:px-3.5 lg:px-5 py-1 sm:py-1.5 lg:py-2 text-[10px] sm:text-xs lg:text-sm font-bold my-0.5 sm:my-1 group-hover:bg-[#ff3b6b] group-hover:text-white transition-all">
            528k
          </div>
          <span className="text-[8px] sm:text-[9px] lg:text-[10px] text-slate-400 font-semibold flex items-center gap-0.5 mt-0.5 sm:mt-1 group-hover:text-slate-500 transition-colors">
            <ArrowUpRight size={10} strokeWidth={2} className="sm:w-3 sm:h-3" />{" "}
            7.9%
          </span>
        </Card>

        {/* 6. Win Rate Card - equal width */}
        <Card className="lg:col-span-1 flex flex-col items-center justify-center p-2.5 sm:p-3 lg:p-4 rounded-2xl shadow-sm border-2 border-slate-200 bg-white w-full h-[100px] sm:h-[120px] lg:h-[140px] text-center transition-all duration-200 hover:border-[#ff3b6b] hover:shadow-lg active:border-[#ff3b6b] group cursor-pointer">
          <span className="text-[8px] sm:text-[9px] lg:text-[10px] font-bold text-slate-500 uppercase tracking-wide mb-1 sm:mb-1.5 group-hover:text-[#ff3b6b] transition-colors whitespace-nowrap px-1">
            Win rate
          </span>
          <div className="bg-slate-200 text-slate-700 rounded-full px-2.5 sm:px-3.5 lg:px-5 py-1 sm:py-1.5 lg:py-2 text-[10px] sm:text-xs lg:text-sm font-bold my-0.5 sm:my-1 group-hover:bg-[#ff3b6b] group-hover:text-white transition-all">
            44%
          </div>
          <span className="text-[9px] sm:text-[10px] lg:text-xs text-slate-400 font-semibold flex items-center gap-0.5 mt-1 group-hover:text-slate-500 transition-colors">
            <ArrowUpRight size={10} strokeWidth={2} className="sm:w-3 sm:h-3" />{" "}
            1.2%
          </span>
        </Card>
      </div>

      {/* Bottom Row: User Stats Pills - Compact */}
      <div className="flex flex-wrap lg:flex-nowrap items-center gap-2 pt-1">
        {bottomStats.map((stat) => (
          <div
            key={stat.id}
            className="flex-1 min-w-[120px] max-w-full lg:max-w-[180px] bg-white rounded-full p-1 pl-1.5 pr-2.5 flex items-center justify-between shadow-sm border border-slate-100 cursor-pointer hover:shadow-md transition-shadow overflow-hidden"
          >
            <div className="flex items-center gap-1.5 sm:gap-2 min-w-0 flex-1 overflow-hidden">
              <Avatar
                size="sm"
                src={stat.img}
                className="w-6 h-6 sm:w-7 sm:h-7 border-2 border-white shadow-sm flex-shrink-0 object-cover"
              />
              <span className="text-[10px] sm:text-[11px] font-bold text-slate-700 truncate min-w-0">
                {stat.value}
              </span>
            </div>
            <span className="text-[9px] sm:text-[10px] font-medium text-slate-400 flex-shrink-0 ml-1">
              {stat.percent}
            </span>
          </div>
        ))}

        {/* C Icon Stat */}
        <div className="flex-1 min-w-[120px] max-w-full lg:max-w-[180px] bg-white rounded-full p-1 pl-1.5 pr-2.5 flex items-center justify-between border border-slate-100 cursor-pointer hover:bg-slate-50 transition-colors shadow-sm overflow-hidden">
          <div className="flex items-center gap-1.5 sm:gap-2 min-w-0 flex-1 overflow-hidden">
            <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-slate-900 text-white flex items-center justify-center text-[10px] sm:text-xs font-bold shadow-sm flex-shrink-0">
              C
            </div>
            <span className="text-[10px] sm:text-[11px] font-bold text-slate-700 truncate min-w-0">
              $45,386
            </span>
          </div>
          <span className="text-[9px] sm:text-[10px] font-medium text-slate-400 flex-shrink-0 ml-1">
            8.58%
          </span>
        </div>

        {/* Details Button */}
        <button className="bg-slate-900 text-white px-5 py-2 rounded-full text-xs font-semibold shadow-md hover:bg-slate-800 transition-all hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap">
          Details
        </button>
      </div>
    </div>
  );
}
