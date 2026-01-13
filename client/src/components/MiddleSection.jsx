import React from 'react';
import { Card } from './Card';
import { Avatar } from './Avatar';
import { Badge } from './Badge';
import { BarChart, Bar, XAxis, ResponsiveContainer, Cell } from 'recharts';
import { Filter, ChevronDown, ShoppingBag } from 'lucide-react';
import { IconButton } from './Button';

const barData = [
    { name: 'Dribbble', uv: 40, fill: '#fda4af' }, // pink-300
    { name: 'Instagram', uv: 30, fill: '#e2e8f0' }, // slate-200
    { name: 'Behance', uv: 20, fill: '#fff' },
    { name: 'Google', uv: 50, fill: '#fff' },
];

export function MiddleSection() {
    return (
        <div className="grid grid-cols-12 gap-6 mb-6">
            {/* Left List */}
            <Card className="col-span-12 md:col-span-3 border-none shadow-none bg-transparent p-0">
                <div className="flex justify-between items-center mb-4 bg-white p-3 rounded-2xl border border-slate-100">
                    <div className="flex items-center gap-2 text-slate-500">
                        <MenuIcon />
                    </div>
                    <button className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                        Filters <Filter size={12} />
                    </button>
                </div>

                <div className="space-y-3">
                    {[
                        { name: 'Dribbble', amount: '$227,459', percent: '43%', icon: '🏀', color: 'text-pink-500' },
                        { name: 'Instagram', amount: '$142,823', percent: '27%', icon: '📷', color: 'text-purple-500' },
                        { name: 'Behance', amount: '$89,935', percent: '11%', icon: 'Bm', color: 'text-blue-500' },
                        { name: 'Google', amount: '$37,028', percent: '7%', icon: 'G', color: 'text-green-500' },
                    ].map((item, idx) => (
                        <div key={idx} className="flex items-center justify-between bg-white p-3 rounded-2xl border border-slate-100">
                            <div className="flex items-center gap-3">
                                <div className={`w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-sm ${item.color} font-bold`}>{item.icon}</div>
                                <span className="text-xs font-semibold text-slate-600">{item.name}</span>
                            </div>
                            <div className="text-right">
                                <span className="text-xs font-bold text-slate-800 block">{item.amount}</span>
                                <span className="text-[10px] text-slate-400 bg-slate-50 px-1.5 py-0.5 rounded-md">{item.percent}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </Card>

            {/* Center Bar Chart */}
            <Card className="col-span-12 md:col-span-4 bg-slate-100 border-none relative overflow-hidden">
                <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center gap-2">
                        <BarChartIcon />
                        <ChevronDown size={14} className="text-slate-400" />
                    </div>
                    <button className="flex items-center gap-2 text-xs font-semibold text-slate-500 bg-white px-3 py-1.5 rounded-full shadow-sm">
                        Filters <Filter size={12} />
                    </button>
                </div>

                <div className="h-48 mt-8 flex items-end justify-between px-4 gap-4">
                    {/* Custom Bars for looks */}
                    <div className="w-12 bg-pink-100 rounded-t-xl h-[60%] relative group">
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white shadow-sm p-1 rounded-full text-pink-500">🏀</div>
                    </div>
                    <div className="w-12 bg-white rounded-t-xl h-[40%] relative">
                        <div className="absolute top-2 left-1/2 -translate-x-1/2 text-slate-300 font-bold text-xs">Be</div>
                    </div>
                    <div className="w-12 bg-white rounded-t-xl h-[30%] relative">
                        <div className="absolute top-2 left-1/2 -translate-x-1/2 text-red-400 font-bold text-xs">G</div>
                    </div>
                    <div className="w-12 bg-white rounded-t-xl h-[50%] relative border border-slate-200 border-dashed flex items-center justify-center">
                        <ShoppingBag size={16} className="text-slate-300" />
                    </div>
                </div>

                <div className="absolute bottom-4 left-6">
                    <h4 className="text-xs font-semibold text-slate-700">Deals amount</h4>
                    <span className="text-[10px] text-slate-400 flex items-center gap-1">by referrer category <ChevronDown size={10} /></span>
                </div>
            </Card>

            {/* Right Table */}
            <Card className="col-span-12 md:col-span-5 bg-white border-none shadow-sm">
                <div className="flex items-center justify-between text-[10px] text-slate-400 font-medium mb-4 px-2">
                    <span>Sales</span>
                    <span>Revenue</span>
                    <span>Leads</span>
                    <span>KPI</span>
                    <span>W/L</span>
                </div>

                <div className="space-y-4">
                    <div className="flex items-center justify-between p-2 hover:bg-slate-50 rounded-xl transition-colors group">
                        <div className="flex items-center gap-2 w-1/4">
                            <Avatar size="sm" src="https://i.pravatar.cc/150?u=1" />
                            <span className="text-xs font-semibold text-slate-700">Armin A.</span>
                        </div>
                        <span className="text-xs font-bold text-slate-700 w-1/5">$209,633</span>
                        <div className="flex items-center gap-2 w-1/6">
                            <span className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center text-[10px] font-bold">41</span>
                            <span className="text-xs text-slate-400">118</span>
                        </div>
                        <span className="text-xs font-medium text-slate-500 w-1/6">0.84</span>
                        <div className="flex items-center gap-2 w-1/6 justify-end">
                            <span className="text-xs text-slate-500">31%</span>
                            <span className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center text-[10px] font-bold">12</span>
                            <span className="text-xs text-slate-400">29</span>
                        </div>
                    </div>

                    <div className="flex items-center justify-between p-2 hover:bg-slate-50 rounded-xl transition-colors group">
                        <div className="flex items-center gap-2 w-1/4">
                            <Avatar size="sm" src="https://i.pravatar.cc/150?u=3" />
                            <span className="text-xs font-semibold text-slate-700">Mikasa A.</span>
                        </div>
                        <span className="text-xs font-bold text-slate-700 w-1/5">$156,841</span>
                        <div className="flex items-center gap-2 w-1/6">
                            <span className="w-6 h-6 rounded-full bg-slate-800 text-white flex items-center justify-center text-[10px] font-bold">54</span>
                            <span className="text-xs text-slate-400">103</span>
                        </div>
                        <span className="text-xs font-medium text-slate-500 w-1/6">0.89</span>
                        <div className="flex items-center gap-2 w-1/6 justify-end">
                            <span className="text-xs text-slate-500">39%</span>
                            <span className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center text-[10px] font-bold">21</span>
                            <span className="text-xs text-slate-400">33</span>
                        </div>
                    </div>
                </div>

                <div className="flex gap-2 mt-6 overflow-x-auto pb-2 scrollbar-hide">
                    {['Top sales 💪', 'Sales streak 🔥', 'Top review 👍'].map((tag, i) => (
                        <span key={i} className="px-3 py-1 bg-slate-50 rounded-full text-[10px] font-semibold text-slate-600 whitespace-nowrap border border-slate-100">
                            {tag}
                        </span>
                    ))}
                </div>
            </Card>
        </div>
    );
}

function MenuIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="12" x2="20" y2="12"></line><line x1="4" y1="6" x2="20" y2="6"></line><line x1="4" y1="18" x2="20" y2="18"></line></svg>
    )
}

function BarChartIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="20" x2="12" y2="10"></line><line x1="18" y1="20" x2="18" y2="4"></line><line x1="6" y1="20" x2="6" y2="16"></line></svg>
    )
}
