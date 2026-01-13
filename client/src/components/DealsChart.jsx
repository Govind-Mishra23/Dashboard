import React from "react";
import { Card } from "./Card";
import { ChevronDown, SlidersHorizontal } from "lucide-react";

export function DealsChart() {
  // Order matches original: Bē, Dribbble, Google, Instagram, Other (left to right)
  const platforms = [
    {
      id: 1,
      name: "Behance",
      heightPercent: 65,
      icon: <span className="text-[#1769ff] font-bold text-sm">Bē</span>,
    },
    {
      id: 2,
      name: "Dribbble",
      heightPercent: 85,
      icon: (
        <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#ea4c89">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" />
        </svg>
      ),
    },
    {
      id: 3,
      name: "Google",
      heightPercent: 50,
      icon: (
        <svg viewBox="0 0 24 24" className="w-4 h-4">
          <path
            fill="#4285F4"
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
          />
          <path
            fill="#34A853"
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
          />
          <path
            fill="#FBBC05"
            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
          />
          <path
            fill="#EA4335"
            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
          />
        </svg>
      ),
    },
    {
      id: 4,
      name: "Instagram",
      heightPercent: 35,
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="w-4 h-4"
          fill="none"
          stroke="#E1306C"
          strokeWidth="2"
        >
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="m16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      ),
    },
    {
      id: 5,
      name: "Other",
      heightPercent: 95,
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="w-4 h-4"
          fill="none"
          stroke="#64748b"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <path d="M16 10a4 4 0 0 1-8 0"></path>
        </svg>
      ),
    },
  ];

  return (
    <Card className="bg-[#F6F6F6] rounded-[1.25rem] p-4 w-full h-full flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-1 text-slate-600">
          <svg
            viewBox="0 0 24 24"
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <line x1="18" y1="20" x2="18" y2="10"></line>
            <line x1="12" y1="20" x2="12" y2="4"></line>
            <line x1="6" y1="20" x2="6" y2="14"></line>
          </svg>
          <ChevronDown size={12} strokeWidth={2} />
        </div>
        <button className="bg-white text-slate-600 px-3 py-1.5 rounded-lg text-sm font-medium flex items-center gap-2 shadow-sm border border-slate-200/50">
          Filters <SlidersHorizontal size={14} />
        </button>
      </div>

      {/* Bar Chart Area - Fixed height container */}
      <div className="flex-1 flex items-end justify-center gap-3 min-h-[200px] pb-4">
        {platforms.map((platform) => (
          <div
            key={platform.id}
            className="flex flex-col items-center justify-end h-full"
          >
            {/* Bar with striped pattern */}
            <div
              className="rounded-xl flex items-start justify-center pt-3 relative overflow-hidden"
              style={{
                height: `${platform.heightPercent}%`,
                width: `${platform.heightPercent}%`,
                maxWidth: "56px",
                minWidth: "32px",
                background:
                  platform.id === 5
                    ? `repeating-linear-gradient(
                      -45deg,
                      #ffffff,
                      #ffffff 3px,
                      #f0f0f0 3px,
                      #f0f0f0 6px
                    )`
                    : "#ffffff",
                boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
              }}
            >
              {/* Icon container */}
              <div className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center border border-slate-100/50">
                {platform.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="text-center pt-3 border-t border-slate-200/50">
        <p className="text-base font-medium text-slate-800">Deals amount</p>
        <p className="text-sm text-slate-400 flex items-center justify-center gap-1">
          by referrer category <ChevronDown size={12} />
        </p>
      </div>
    </Card>
  );
}
