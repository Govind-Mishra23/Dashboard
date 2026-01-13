import React from "react";
import { Card } from "./Card";
import { Avatar } from "./Avatar";
import { AreaChart, Area, ResponsiveContainer } from "recharts";
import { ChevronDown, ArrowUpRight } from "lucide-react";

const lineData = [
  { name: "w1", uv: 4000 },
  { name: "w2", uv: 3000 },
  { name: "w3", uv: 2000 },
  { name: "w4", uv: 2780 },
  { name: "w5", uv: 1890 },
  { name: "w6", uv: 2390 },
  { name: "w7", uv: 3490 },
];

export function BottomSection() {
  const monthlyData = [
    {
      month: "Sep",
      value: "$6,901",
      bars: [55, 40, 50],
      avatars: [
        "https://i.pravatar.cc/150?u=10",
        "https://i.pravatar.cc/150?u=11",
        "https://i.pravatar.cc/150?u=12",
      ],
    },
    {
      month: "Oct",
      value: "$11,035",
      bars: [80, 65, 75],
      avatars: [
        "https://i.pravatar.cc/150?u=13",
        "https://i.pravatar.cc/150?u=14",
        "https://i.pravatar.cc/150?u=15",
      ],
    },
    {
      month: "Nov",
      value: "$9,288",
      bars: [70, 55, 65],
      avatars: [
        "https://i.pravatar.cc/150?u=16",
        "https://i.pravatar.cc/150?u=17",
        "https://i.pravatar.cc/150?u=18",
      ],
    },
  ];

  return (
    <Card className="bg-[#F6F6F6] rounded-[1.25rem] p-3 sm:p-5 shadow-sm overflow-hidden">
      {/* Left: Platform Value Bar Chart */}
      <div className="bg-[#faf9f7] rounded-[1.25rem] p-3 sm:p-5">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-pink-50 flex items-center justify-center shrink-0">
              <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6" fill="#ea4c89">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.054-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" />
              </svg>
            </div>
            <div className="min-w-0">
              <p className="text-[10px] sm:text-xs text-slate-400">Platform value</p>
              <p className="text-sm sm:text-base font-semibold text-slate-900 flex items-center gap-1">
                Dribbble <ChevronDown size={14} className="shrink-0" />
              </p>
            </div>
          </div>
          <div className="flex gap-1 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0 scrollbar-hide">
            <button className="bg-slate-900 text-white px-3 sm:px-5 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-xs font-medium whitespace-nowrap">
              Revenue
            </button>
            <button className="bg-white text-slate-500 px-3 sm:px-5 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-xs font-medium border border-slate-200 whitespace-nowrap">
              Leads
            </button>
            <button className="bg-white text-slate-500 px-3 sm:px-5 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-xs font-medium border border-slate-200 whitespace-nowrap">
              W/L
            </button>
          </div>
        </div>

        {/* Chart Area */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-4 relative">
          {/* Pink Stats Card */}
          <div className="relative w-full lg:w-[190px] h-[180px] lg:h-[230px] shrink-0">
            {/* Main pink card background */}
            <div
              className="absolute inset-0 bg-[#E11D48]"
              style={{
                borderTopLeftRadius: "0px",
                borderTopRightRadius: "40px",
                borderBottomRightRadius: "0px",
                borderBottomLeftRadius: "40px",
              }}
            />

            {/* Average monthly text on left side */}
            <div
              className="absolute left-0 top-0 flex items-center justify-center shrink-0"
              style={{
                width: "28px",
                height: "100%",
              }}
            >
              <span
                className="text-[8px] sm:text-[9px] font-medium text-white/60 tracking-wider whitespace-nowrap"
                style={{ transform: "rotate(-90deg)", letterSpacing: "0.1em" }}
              >
                Average monthly
              </span>
            </div>

            {/* Stats content */}
            <div className="relative z-10 h-full pl-9 pr-4 py-4 lg:py-5 text-white flex flex-row lg:flex-col justify-between items-center lg:items-start text-center lg:text-left gap-4">
              <div className="flex-1 lg:flex-none">
                <p className="text-[9px] sm:text-[10px] text-white/60 mb-0.5">Revenue</p>
                <p className="text-xl sm:text-[22px] font-bold leading-tight">$18,552</p>
              </div>
              <div className="flex-1 lg:flex-none">
                <p className="text-[9px] sm:text-[10px] text-white/60 mb-0.5">Leads</p>
                <p className="text-sm sm:text-base font-bold">
                  373{" "}
                  <span className="text-white/50 font-normal text-[10px] sm:text-xs block lg:inline">
                    97/276
                  </span>
                </p>
              </div>
              <div className="flex-1 lg:flex-none">
                <p className="text-[9px] sm:text-[10px] text-white/60 mb-0.5">Win/lose</p>
                <p className="text-sm sm:text-base font-bold">
                  16%{" "}
                  <span className="text-white/50 font-normal text-[10px] sm:text-xs block lg:inline">
                    51/318
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Bar Chart */}
          <div className="flex-1 flex flex-col min-h-[220px] lg:min-h-0">
            {/* Y-axis labels - hidden on very small screens or moved */}
            <div className="hidden sm:flex justify-end mb-2 relative h-6">
              <div className="flex flex-row items-center gap-4 text-[9px] sm:text-[10px] text-slate-300 absolute right-0 top-0">
                <span>$14,500</span>
                <span>$11,000</span>
                <span>$7,500</span>
                <span>$4,000</span>
              </div>
            </div>

            {/* Bars container */}
            <div className="flex-1 flex items-end justify-around sm:pr-8 h-full min-h-[160px] lg:h-[180px]">
              {monthlyData.map((month, idx) => (
                <div key={idx} className="flex flex-col items-center flex-1 max-w-[80px]">
                  {/* Value label on top */}
                  <div className="bg-[#E11D48] text-white px-2 sm:px-3 py-1 rounded-lg text-[10px] sm:text-xs font-bold mb-2 whitespace-nowrap">
                    {month.value}
                  </div>

                  {/* Bars group */}
                  <div className="flex items-end gap-1 h-20 sm:h-28">
                    {month.bars.map((height, barIdx) => (
                      <div
                        key={barIdx}
                        className="w-3 sm:w-5 rounded-t-lg"
                        style={{
                          height: `${height}%`,
                          background: `repeating-linear-gradient(-45deg, #e8e8e8, #e8e8e8 2px, #f2f2f2 2px, #f2f2f2 4px)`,
                        }}
                      />
                    ))}
                  </div>

                  {/* Avatars */}
                  <div className="flex -space-x-1 sm:-space-x-1.5 mt-2">
                    {month.avatars.map((avatar, avatarIdx) => (
                      <Avatar
                        key={avatarIdx}
                        size="xs"
                        src={avatar}
                        className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white flex-shrink-0"
                      />
                    ))}
                  </div>

                  {/* Month label */}
                  <span className="text-[10px] sm:text-xs text-slate-400 mt-1">
                    {month.month}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
