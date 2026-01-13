import React from 'react';
import { Card } from './Card';
import { Avatar } from './Avatar';
import { AreaChart, Area, ResponsiveContainer } from 'recharts';
import { ChevronUp, SlidersHorizontal, Flame, TrendingUp, Star, ArrowUpRight } from 'lucide-react';

const salesData = [
    { id: 1, name: 'Armin A.', revenue: '$209,633', sales: 41, leads: 118, kpi: 0.84, wl: '31%', score: 12, points: 29, img: 'https://i.pravatar.cc/150?u=1' },
    { id: 2, name: 'Mikasa A.', revenue: '$156,841', sales: 54, leads: 103, kpi: 0.89, wl: '39%', score: 21, points: 33, img: 'https://i.pravatar.cc/150?u=2', highlight: true },
    { id: 3, name: 'Eren Y.', revenue: '$117,115', sales: 22, leads: 84, kpi: 0.79, wl: '32%', score: 7, points: 15, img: 'https://i.pravatar.cc/150?u=3' },
];

const chartData = [
    { uv: 4000 }, { uv: 3000 }, { uv: 5000 }, { uv: 2780 }, { uv: 1890 }, { uv: 2390 }, { uv: 3490 },
    { uv: 2000 }, { uv: 2780 }, { uv: 1890 }, { uv: 3390 }, { uv: 4490 }, { uv: 3000 }, { uv: 5000 },
    { uv: 4000 }, { uv: 6000 }, { uv: 5000 }, { uv: 7000 }, { uv: 6500 }, { uv: 8000 }, { uv: 7500 }
];

export function RightPanel() {
    return (
        <Card className="bg-white rounded-[2rem] p-6 w-full h-full flex flex-col gap-1 border border-slate-100 shadow-sm relative overflow-visible">
            {/* Header Labels */}
            <div className="grid grid-cols-[1.5fr_1fr_90px_60px_140px] items-center text-[10px] font-bold text-slate-400 uppercase tracking-widest px-4 pb-2 gap-2">
                <span className="pl-1">Sales</span>
                <span className="pl-2">Revenue</span>
                <span className="text-center">Leads</span>
                <span className="text-center">KPI</span>
                <span className="text-center pr-8">W/L</span>
            </div>

            {/* List */}
            <div className="flex flex-col gap-4">
                {salesData.map((user) => (
                    <div key={user.id} className={`rounded-[2rem] transition-all duration-300 ${user.highlight ? 'bg-gradient-to-br from-white via-pink-50/30 to-purple-50/20 shadow-sm' : ''}`}>
                        {/* User Row */}
                        <div className={`grid grid-cols-[1.5fr_1fr_90px_60px_140px] items-center h-12 gap-2 ${user.highlight ? 'px-4' : 'px-4'}`}>
                            {/* Name */}
                            <div className="flex items-center gap-3 pl-1">
                                <Avatar size="sm" src={user.img} className="w-10 h-10 rounded-full border border-white shadow-sm" />
                                <span className="text-sm font-semibold text-slate-800 whitespace-nowrap">{user.name}</span>
                            </div>

                            {/* Revenue */}
                            <span className="text-sm font-bold text-slate-900 pl-2">{user.revenue}</span>

                            {/* Leads Group */}
                            <div className="flex items-center justify-center gap-1">
                                <span className="bg-slate-900 text-white text-xs font-bold w-8 h-6 rounded-full flex items-center justify-center">{user.sales}</span>
                                <span className="bg-slate-100 text-slate-600 text-xs font-medium px-2.5 h-6 rounded-full flex items-center justify-center">{user.leads}</span>
                            </div>

                            {/* KPI */}
                            <span className="text-center text-sm text-slate-600 font-medium">{user.kpi}</span>

                            {/* W/L + Score/Points */}
                            <div className="flex items-center gap-3">
                                <span className="text-sm text-slate-600 font-medium w-8 text-center">{user.wl}</span>
                                <div className="flex items-center gap-1">
                                    <span className="bg-slate-900 text-white text-xs font-bold w-8 h-6 rounded-full flex items-center justify-center">{user.score}</span>
                                    <span className="bg-slate-100 text-slate-600 text-xs font-medium w-8 h-6 rounded-full flex items-center justify-center">{user.points}</span>
                                </div>
                                {user.highlight && (
                                    <button className="bg-[#e11d48] text-white w-6 h-6 rounded-full flex items-center justify-center shadow-md shadow-pink-200 hover:bg-[#be123c] transition-colors ml-auto translate-x-1">
                                        <ChevronUp size={14} strokeWidth={3} />
                                    </button>
                                )}
                            </div>
                        </div>

                        {user.highlight && (
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

                                    <div className="grid grid-cols-[1.3fr_1fr] gap-4">
                                        {/* Dribbble Large Card */}
                                        <div className="bg-white rounded-[1.75rem] p-6 shadow-sm border border-slate-100 flex flex-col justify-between h-[200px] relative overflow-hidden group">
                                            <div className="absolute right-0 top-0 bottom-0 w-2/5 bg-[repeating-linear-gradient(-45deg,#f8f8f8,#f8f8f8_5px,white_5px,white_10px)]"></div>
                                            <div className="relative z-10">
                                                <div className="flex items-center gap-3 mb-1">
                                                    <span className="text-[#ea4c89]">
                                                        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5">
                                                            <circle cx="12" cy="12" r="10" />
                                                            <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-5.38c-3.72-3.8-10.64-4.81-18.2-3.12M12 12c-3.47 2.1-6.8 2.82-10 2.02" />
                                                        </svg>
                                                    </span>
                                                    <span className="text-base font-bold text-slate-800">Dribbble</span>
                                                </div>
                                            </div>
                                            <div className="relative z-10">
                                                <div className="text-4xl font-bold text-slate-900 mb-1">45.3%</div>
                                                <div className="text-xl font-bold text-slate-300">$71,048</div>
                                            </div>
                                        </div>

                                        {/* Right Column Cards */}
                                        <div className="flex flex-col gap-3 h-[200px]">
                                            {/* Instagram */}
                                            <div className="bg-white rounded-[1.25rem] p-4 shadow-sm border border-slate-100 flex-1 flex flex-col justify-center gap-1">
                                                <div className="flex items-center gap-2 mb-1">
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
                                                    <span className="text-sm font-bold text-slate-900">28.1%</span>
                                                    <span className="text-sm font-medium text-slate-300">$44,072</span>
                                                </div>
                                            </div>

                                            {/* Google */}
                                            <div className="bg-white rounded-[1.25rem] p-4 shadow-sm border border-slate-100 flex-1 flex flex-col justify-center gap-1 relative overflow-hidden">
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
                                                <div className="relative z-10 flex items-center justify-between mt-1">
                                                    <span className="text-sm font-bold text-slate-900">14.1%</span>
                                                    <span className="text-sm font-medium text-slate-300">$22,114</span>
                                                </div>
                                            </div>

                                            {/* Other */}
                                            <div className="bg-white rounded-[1.25rem] p-4 shadow-sm border border-slate-100 flex-1 flex flex-col justify-center gap-1">
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center gap-2">
                                                        <svg viewBox="0 0 24 24" className="w-5 h-5 text-slate-800" fill="none" stroke="currentColor" strokeWidth="2">
                                                            <rect x="3" y="3" width="18" height="18" rx="5" ry="5"></rect>
                                                            <path d="M16 2v4M8 2v4M3 10h18" />
                                                        </svg>
                                                        <span className="text-sm font-semibold text-slate-800">Other</span>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <span className="text-sm font-bold text-slate-900">7.1%</span>
                                                        <span className="text-sm font-medium text-slate-300">$11,135</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Sales dynamic */}
                                <div className="relative pb-6">
                                    <div className="flex justify-between items-center mb-0">
                                        <h4 className="text-base font-bold text-slate-800">Sales dynamic</h4>
                                        <ArrowUpRight size={16} className="text-slate-400" />
                                    </div>

                                    <div className="h-[120px] w-full relative">
                                        <ResponsiveContainer width="100%" height="100%">
                                            <AreaChart data={chartData}>
                                                <defs>
                                                    <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                                                        <stop offset="5%" stopColor="#f43f5e" stopOpacity={0.1} />
                                                        <stop offset="95%" stopColor="#f43f5e" stopOpacity={0} />
                                                    </linearGradient>
                                                </defs>
                                                <Area type="natural" dataKey="uv" stroke="#f43f5e" strokeWidth={2} fill="url(#colorSales)" />
                                            </AreaChart>
                                        </ResponsiveContainer>

                                        {/* Timeline labels */}
                                        <div className="flex justify-between text-[10px] text-slate-300 px-4 mt-2 uppercase tracking-widest font-medium">
                                            <span>w 1</span>
                                            <span>w 3</span>
                                            <span>w 5</span>
                                            <span>w 7</span>
                                            <span>w 9</span>
                                            <span>w 11</span>
                                        </div>

                                        {/* Timeline Bar */}
                                        <div className="absolute bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-[#e11d48] via-[#eab308] to-[#22c55e] rounded-full mx-2 mt-4">
                                            {/* Icons on timeline */}
                                            <div className="absolute -top-3 left-[28%] bg-[#1769ff] text-white p-1 rounded-md shadow-md hover:scale-110 transition-transform">
                                                <span className="text-[10px] font-bold block leading-none">Bē</span>
                                            </div>
                                            <div className="absolute -top-3 left-[55%] bg-[#ea4c89] text-white p-1 rounded-full shadow-md hover:scale-110 transition-transform">
                                                <svg viewBox="0 0 24 24" className="w-3 h-3 text-white" fill="currentColor"><circle cx="12" cy="12" r="10" /></svg>
                                            </div>
                                            <div className="absolute -top-3 right-[15%]">
                                                <Avatar size="xs" src="https://i.pravatar.cc/150?u=3" className="w-5 h-5 border-2 border-white shadow-md relative z-10" />
                                                <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#e11d48] rounded-full flex items-center justify-center border border-white">
                                                    <span className="text-[6px] text-white font-bold">★</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </Card>
    );
}
