import React, { useState } from 'react';
import { Card } from './Card';
import { Avatar } from './Avatar';
import { AreaChart, Area, ResponsiveContainer } from 'recharts';
import { ChevronUp, ChevronDown, SlidersHorizontal, Flame, TrendingUp, Star, ArrowUpRight } from 'lucide-react';

const salesData = [
    { id: 1, name: 'Armin A.', revenue: '$209,633', sales: 41, leads: 118, kpi: 0.84, wl: '31%', score: 12, points: 29, img: 'https://i.pravatar.cc/150?u=1' },
    { id: 2, name: 'Mikasa A.', revenue: '$156,841', sales: 54, leads: 103, kpi: 0.89, wl: '39%', score: 21, points: 33, img: 'https://i.pravatar.cc/150?u=2' },
    { id: 3, name: 'Eren Y.', revenue: '$117,115', sales: 22, leads: 84, kpi: 0.79, wl: '32%', score: 7, points: 15, img: 'https://i.pravatar.cc/150?u=3' },
];

const chartData = [
    // W1 - start with small waves
    { main: 3200, secondary: 3500 },
    { main: 3350, secondary: 3580 },
    { main: 3280, secondary: 3520 },
    { main: 3400, secondary: 3600 },
    { main: 3320, secondary: 3550 },
    // W3 - slight rise with waves
    { main: 3500, secondary: 3650 },
    { main: 3650, secondary: 3720 },
    { main: 3580, secondary: 3680 },
    { main: 3720, secondary: 3800 },
    { main: 3650, secondary: 3750 },
    // W5 - peak near Dribbble icon with waves
    { main: 3850, secondary: 3900 },
    { main: 4200, secondary: 4100 },
    { main: 5500, secondary: 4800 }, // Peak at Dribbble
    { main: 4900, secondary: 4600 },
    { main: 4600, secondary: 4400 },
    // W7 - dip down with waves
    { main: 4200, secondary: 4300 },
    { main: 3900, secondary: 4150 },
    { main: 3600, secondary: 3950 },
    { main: 3400, secondary: 3800 },
    { main: 3250, secondary: 3650 },
    // W9 - recovery with waves
    { main: 3400, secondary: 3700 },
    { main: 3600, secondary: 3820 },
    { main: 3500, secondary: 3750 },
    { main: 3750, secondary: 3900 },
    { main: 3650, secondary: 3850 },
    // W11 - rise to end with waves
    { main: 3900, secondary: 4000 },
    { main: 4200, secondary: 4150 },
    { main: 4500, secondary: 4350 },
    { main: 4800, secondary: 4550 },
    { main: 5000, secondary: 4700 },
    { main: 5300, secondary: 4900 },
    { main: 5500, secondary: 5100 },
    { main: 5700, secondary: 5300 },
    { main: 5850, secondary: 5450 }
];

export function RightPanel() {
    const [expandedUserId, setExpandedUserId] = useState(2); // Default to Mikasa A. expanded

    const toggleExpand = (userId) => {
        setExpandedUserId(expandedUserId === userId ? null : userId);
    };

    return (
        <Card className="bg-white rounded-[2rem] p-3 sm:p-4 md:p-6 w-full h-full flex flex-col gap-1 border border-slate-100 shadow-sm relative overflow-hidden">
            {/* Header Labels */}
            <div className="grid grid-cols-[minmax(90px,1.5fr)_minmax(70px,1fr)_minmax(60px,80px)_minmax(45px,55px)_minmax(90px,130px)] items-center text-[9px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-widest px-1 sm:px-2 pb-2 gap-1 sm:gap-2">
                <span className="truncate">Sales</span>
                <span className="truncate">Revenue</span>
                <span className="text-center truncate">Leads</span>
                <span className="text-center truncate">KPI</span>
                <span className="text-center truncate">W/L</span>
            </div>

            {/* List */}
            <div className="flex flex-col gap-4">
                {salesData.map((user) => {
                    const isExpanded = expandedUserId === user.id;
                    return (
                        <div key={user.id} className={`rounded-[2rem] transition-all duration-300 ${isExpanded ? 'bg-gradient-to-br from-pink-50/60 via-rose-50/50 to-pink-100/70 shadow-sm' : ''}`}>
                            {/* User Row */}
                            <div className={`grid grid-cols-[minmax(90px,1.5fr)_minmax(70px,1fr)_minmax(60px,80px)_minmax(45px,55px)_minmax(90px,130px)] items-center h-12 gap-1 sm:gap-2 ${isExpanded ? 'px-1 sm:px-2' : 'px-1 sm:px-2'}`}>
                                {/* Name */}
                                <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
                                    <Avatar size="sm" src={user.img} className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-white shadow-sm flex-shrink-0" />
                                    <span className="text-xs sm:text-sm font-semibold text-slate-800 truncate">{user.name}</span>
                                </div>

                                {/* Revenue */}
                                <span className="text-xs sm:text-sm font-bold text-slate-900 truncate">{user.revenue}</span>

                                {/* Leads Group */}
                                <div className="flex items-center justify-center gap-0.5 sm:gap-1">
                                    <span className="bg-slate-900 text-white text-[10px] sm:text-xs font-bold w-6 sm:w-8 h-5 sm:h-6 rounded-full flex items-center justify-center flex-shrink-0">{user.sales}</span>
                                    <span className="bg-slate-100 text-slate-600 text-[10px] sm:text-xs font-medium px-1.5 sm:px-2.5 h-5 sm:h-6 rounded-full flex items-center justify-center flex-shrink-0">{user.leads}</span>
                                </div>

                                {/* KPI */}
                                <span className="text-center text-xs sm:text-sm text-slate-600 font-medium truncate">{user.kpi}</span>

                                {/* W/L + Score/Points */}
                                <div className="flex items-center gap-1 sm:gap-3">
                                    <span className="text-xs sm:text-sm text-slate-600 font-medium w-6 sm:w-8 text-center truncate">{user.wl}</span>
                                    <div className="flex items-center gap-0.5 sm:gap-1">
                                        <span className="bg-slate-900 text-white text-[10px] sm:text-xs font-bold w-6 sm:w-8 h-5 sm:h-6 rounded-full flex items-center justify-center flex-shrink-0">{user.score}</span>
                                        <span className="bg-slate-100 text-slate-600 text-[10px] sm:text-xs font-medium w-6 sm:w-8 h-5 sm:h-6 rounded-full flex items-center justify-center flex-shrink-0">{user.points}</span>
                                    </div>
                                    {user.id === 2 && (
                                        <button
                                            onClick={() => toggleExpand(user.id)}
                                            className="bg-[#e11d48] text-white w-6 h-6 rounded-full flex items-center justify-center shadow-md shadow-pink-200 hover:bg-[#be123c] transition-colors ml-auto translate-x-1"
                                        >
                                            {isExpanded ? <ChevronUp size={14} strokeWidth={3} /> : <ChevronDown size={14} strokeWidth={3} />}
                                        </button>
                                    )}
                                </div>
                            </div>

                            {isExpanded && (
                                // Expanded View Content
                                <div className="mt-4 px-4 pb-4 flex flex-col gap-6">
                                    {/* Badges */}
                                    <div className="flex items-center gap-3">
                                        {[
                                            { text: 'Top sales', icon: '💪' },
                                            { text: 'Sales streak', icon: '🔥' },
                                            { text: 'Top review', icon: '👍' }
                                        ].map((badge, i) => (
                                            <div key={i} className="bg-white px-4 py-2 rounded-[1.25rem] shadow-sm border border-slate-100/50 flex items-center gap-2">
                                                <span className="text-sm font-medium text-slate-700">{badge.text}</span>
                                                <span className="text-sm">{badge.icon}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Work with platforms */}
                                    <div>
                                        <div className="flex justify-between items-center mb-4">
                                            <h4 className="text-base font-bold text-slate-800">Work with platforms</h4>
                                            <div className="flex items-center gap-3 bg-[#e11d48] text-white pl-3 pr-4 py-1.5 rounded-full text-sm font-bold shadow-md shadow-pink-200/50">
                                                <div className="bg-white/20 p-1 rounded-full"><ChevronUp size={10} strokeWidth={3} /></div>
                                                3
                                                <span className="bg-white/20 h-4 w-px mx-1"></span>
                                                $156,841
                                            </div>
                                        </div>

                                        {/* Dynamic Grid Layout */}
                                        <div className="grid grid-cols-12 gap-3 auto-rows-[60px]">
                                            {/* Dribbble - Largest (45.3%) - spans 6 columns, 3 rows */}
                                            <div className="col-span-6 row-span-3 bg-white rounded-[1.5rem] p-4 shadow-sm border border-slate-100 flex flex-col justify-between relative overflow-hidden">
                                                <div className="absolute right-0 top-0 bottom-0 w-2/5 bg-[repeating-linear-gradient(-45deg,#f8f8f8,#f8f8f8_5px,white_5px,white_10px)]"></div>
                                                <div className="relative z-10">
                                                    <div className="flex items-center gap-2 mb-1">
                                                        <span className="text-[#ea4c89]">
                                                            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                                                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" />
                                                            </svg>
                                                        </span>
                                                        <span className="text-sm font-semibold text-slate-800">Dribbble</span>
                                                    </div>
                                                </div>
                                                <div className="relative z-10">
                                                    <div className="text-3xl font-bold text-slate-900 mb-0.5">45.3%</div>
                                                    <div className="text-lg font-bold text-slate-300">$71,048</div>
                                                </div>
                                            </div>

                                            {/* Instagram - Medium (28.1%) - spans 6 columns, 2 rows */}
                                            <div className="col-span-6 row-span-2 bg-white rounded-[1.25rem] p-4 shadow-sm border border-slate-100 flex flex-col justify-between">
                                                <div className="flex items-center gap-2">
                                                    <span className="text-[#E1306C]">
                                                        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5">
                                                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                                            <path d="m16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                                        </svg>
                                                    </span>
                                                    <span className="text-sm font-semibold text-slate-800">Instagram</span>
                                                </div>
                                                <div className="flex items-center justify-between">
                                                    <span className="text-xl font-bold text-slate-900">28.1%</span>
                                                    <span className="text-sm font-medium text-slate-300">$44,072</span>
                                                </div>
                                            </div>

                                            {/* Google - Small (14.1%) - spans 6 columns, 1 row */}
                                            <div className="col-span-6 row-span-1 bg-white rounded-[1.25rem] px-4 py-3 shadow-sm border border-slate-100 flex items-center justify-between relative overflow-hidden">
                                                <div className="absolute inset-0 bg-[repeating-linear-gradient(-45deg,#f8f8f8,#f8f8f8_3px,white_3px,white_6px)]"></div>
                                                <div className="relative z-10 flex items-center gap-2">
                                                    <svg viewBox="0 0 24 24" className="w-5 h-5">
                                                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                                                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                                                    </svg>
                                                    <span className="text-sm font-semibold text-slate-800">Google</span>
                                                </div>
                                                <div className="relative z-10 flex items-center gap-3">
                                                    <span className="text-sm font-bold text-slate-900">14.1%</span>
                                                    <span className="text-xs font-medium text-slate-300">$22,114</span>
                                                </div>
                                            </div>

                                            {/* Apple - Very Small (5.4%) - spans 6 columns, 1 row */}
                                            <div className="col-span-6 row-span-1 bg-white rounded-[1.25rem] px-4 py-3 shadow-sm border border-slate-100 flex items-center justify-between">
                                                <div className="flex items-center gap-2">
                                                    <svg viewBox="0 0 24 24" className="w-5 h-5 text-slate-800" fill="currentColor">
                                                        <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                                                    </svg>
                                                    <span className="text-sm font-semibold text-slate-800">Apple</span>
                                                </div>
                                                <div className="flex items-center gap-3">
                                                    <span className="text-sm font-bold text-slate-900">5.4%</span>
                                                    <span className="text-xs font-medium text-slate-300">$8,469</span>
                                                </div>
                                            </div>

                                            {/* Other - Smallest (7.1%) - spans 6 columns, 1 row */}
                                            <div className="col-span-6 row-span-1 bg-white rounded-[1.25rem] px-4 py-3 shadow-sm border border-slate-100 flex items-center justify-between">
                                                <div className="flex items-center gap-2">
                                                    <svg viewBox="0 0 24 24" className="w-5 h-5 text-slate-800" fill="none" stroke="currentColor" strokeWidth="2">
                                                        <rect x="3" y="3" width="18" height="18" rx="5" ry="5"></rect>
                                                        <path d="M16 2v4M8 2v4M3 10h18" />
                                                    </svg>
                                                    <span className="text-sm font-semibold text-slate-800">Other</span>
                                                </div>
                                                <div className="flex items-center gap-3">
                                                    <span className="text-sm font-bold text-slate-900">7.1%</span>
                                                    <span className="text-xs font-medium text-slate-300">$11,135</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Sales dynamic */}
                                    <div className="relative bg-gradient-to-br from-pink-50/40 via-rose-50/30 to-pink-100/40 rounded-[1.5rem] p-5 pb-8">
                                        <div className="flex justify-between items-center mb-3">
                                            <h4 className="text-base font-bold text-slate-800">Sales dynamic</h4>
                                            <ArrowUpRight size={16} className="text-slate-400" />
                                        </div>

                                        <div className="h-[100px] w-full relative mb-2">
                                            {/* Week labels at top */}
                                            <div className="absolute -top-1 left-0 right-0 flex justify-between text-[10px] text-slate-400 px-2 uppercase tracking-wider font-medium">
                                                <span>w 1</span>
                                                <span>w 3</span>
                                                <span>w 5</span>
                                                <span>w 7</span>
                                                <span>w 9</span>
                                                <span>w 11</span>
                                            </div>

                                            {/* Chart Container */}
                                            <div className="absolute top-4 left-0 right-0 bottom-0">
                                                <ResponsiveContainer width="100%" height="100%">
                                                    <AreaChart data={chartData}>
                                                        <defs>
                                                            {/* Gradient for main line */}
                                                            <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                                                                <stop offset="5%" stopColor="#be123c" stopOpacity={0.08} />
                                                                <stop offset="95%" stopColor="#be123c" stopOpacity={0} />
                                                            </linearGradient>
                                                            {/* Gradient for secondary line */}
                                                            <linearGradient id="colorSalesSecondary" x1="0" y1="0" x2="0" y2="1">
                                                                <stop offset="5%" stopColor="#f9a8d4" stopOpacity={0.05} />
                                                                <stop offset="95%" stopColor="#f9a8d4" stopOpacity={0} />
                                                            </linearGradient>
                                                        </defs>
                                                        {/* Secondary solid line */}
                                                        <Area
                                                            type="monotone"
                                                            dataKey="secondary"
                                                            stroke="#e9b8ce"
                                                            strokeWidth={2}
                                                            fill="url(#colorSalesSecondary)"
                                                            dot={false}
                                                        />
                                                        {/* Main solid line */}
                                                        <Area
                                                            type="monotone"
                                                            dataKey="main"
                                                            stroke="#be123c"
                                                            strokeWidth={2.5}
                                                            fill="url(#colorSales)"
                                                            dot={false}
                                                        />
                                                    </AreaChart>
                                                </ResponsiveContainer>
                                            </div>
                                        </div>

                                        {/* Timeline Bar with Icons */}
                                        <div className="relative mt-6">
                                            <div className="h-1.5 bg-gradient-to-r from-[#e11d48] via-[#eab308] to-[#22c55e] rounded-full">
                                                {/* Behance Icon */}
                                                <div className="absolute -top-4 left-[20%] -translate-x-1/2 bg-[#1769ff] text-white px-2 py-1 rounded-md shadow-lg hover:scale-110 transition-transform">
                                                    <span className="text-[11px] font-bold block leading-none">Bē</span>
                                                </div>



                                                {/* Dribbble Icon */}
                                                <div className="absolute -top-4 left-[55%] -translate-x-1/2 bg-[#ea4c89] text-white p-1.5 rounded-full shadow-lg hover:scale-110 transition-transform">
                                                    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-white" fill="currentColor">
                                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" />
                                                    </svg>
                                                </div>

                                                {/* Avatar with Star Badge */}
                                                <div className="absolute -top-5 right-[12%] -translate-x-1/2">
                                                    <div className="relative">
                                                        <Avatar size="xs" src="https://i.pravatar.cc/150?u=3" className="w-6 h-6 border-2 border-white shadow-lg" />
                                                        <div className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-[#e11d48] rounded-full flex items-center justify-center border-2 border-white">
                                                            <span className="text-[7px] text-white font-bold leading-none">★</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </Card>
    );
}
