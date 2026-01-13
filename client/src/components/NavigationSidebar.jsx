import React from 'react';
import { Star, Clock, Plus, ChevronUp, FolderPlus } from 'lucide-react';
import { cn } from '../lib/utils';
import { Badge } from './Badge';

export function NavigationSidebar() {
    return (
        <div className="w-52 pt-9 pb-4 flex flex-col h-screen fixed left-20 top-0 bg-transparent z-0 overflow-y-auto no-scrollbar text-sm">
            <div className="px-6 mb-6">
                <div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
                    <h2 className="font-bold text-slate-700 text-[15px]">Codename.com</h2>
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className="text-slate-400">
                        <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            </div>

            <div className="px-6 space-y-4 mb-8">
                {/* Top Links */}
                <div className="space-y-3">
                    <a href="#" className="flex items-center gap-3 text-slate-500 font-medium hover:text-slate-900">
                        <Star size={18} /> Starred
                    </a>
                    <a href="#" className="flex items-center gap-3 text-slate-500 font-medium hover:text-slate-900">
                        <Clock size={18} /> Recent
                    </a>
                </div>

                {/* Sections */}
                <div className="pt-2">
                    <div className="font-semibold text-slate-800 mb-2">Sales list</div>
                </div>
                <div>
                    <div className="font-semibold text-slate-800 mb-2">Goals</div>
                </div>

                {/* Dashboard Tree */}
                <div>
                    <div className="flex items-center justify-between group cursor-pointer mb-2">
                        <span className="font-semibold text-slate-800">Dashboard</span>
                        <button className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-slate-400 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">
                            <Plus size={14} />
                        </button>
                    </div>

                    <div className="relative pl-3 border-l-2 border-slate-200 ml-1.5 space-y-1">
                        {/* Item 1 */}
                        <div className="relative flex items-center">
                            <div className="absolute -left-[14px] top-1/2 w-3 h-0.5 bg-slate-200"></div>
                            <span className="px-3 py-1.5 block text-slate-600 font-medium w-full rounded-lg hover:bg-slate-200/50">Codename</span>
                        </div>

                        {/* Item 2 - Expanded */}
                        <div className="relative">
                            <div className="flex items-center justify-between pr-2 rounded-lg hover:bg-slate-200/50 cursor-pointer">
                                <div className="relative flex items-center flex-1">
                                    <div className="absolute -left-[14px] top-1/2 w-3 h-0.5 bg-slate-200"></div>
                                    <span className="px-3 py-1.5 block text-slate-800 font-medium">Shared with me</span>
                                </div>
                                <ChevronUp size={14} className="text-slate-400" />
                            </div>

                            {/* Sub Tree */}
                            <div className="relative pl-3 border-l-2 border-slate-200 ml-1.5 mt-1 space-y-1">
                                <div className="relative flex items-center">
                                    <div className="absolute -left-[14px] top-1/2 w-3 h-0.5 bg-slate-200"></div>
                                    <span className="px-3 py-1.5 block text-slate-600 font-medium w-full rounded-lg hover:bg-slate-200/50">Cargo2go</span>
                                </div>
                                <div className="relative flex items-center justify-between pr-2 rounded-lg hover:bg-slate-200/50">
                                    <div className="flex items-center relative flex-1">
                                        <div className="absolute -left-[14px] top-1/2 w-3 h-0.5 bg-slate-200"></div>
                                        <span className="px-3 py-1.5 block text-slate-800 font-medium">Cloudz3r</span>
                                    </div>
                                    <span className="bg-[#f43f5e] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-md">2</span>
                                </div>
                                <div className="relative flex items-center">
                                    <div className="absolute -left-[14px] top-1/2 w-3 h-0.5 bg-slate-200"></div>
                                    <span className="px-3 py-1.5 block text-slate-600 font-medium w-full rounded-lg hover:bg-slate-200/50">Idioma</span>
                                </div>
                                <div className="relative flex items-center">
                                    <div className="absolute -left-[14px] top-1/2 w-3 h-0.5 bg-slate-200"></div>
                                    <span className="px-3 py-1.5 block text-slate-600 font-medium w-full rounded-lg hover:bg-slate-200/50">Syllables</span>
                                </div>
                                <div className="relative flex items-center">
                                    <div className="absolute -left-[14px] top-1/2 w-3 h-0.5 bg-slate-200"></div>
                                    <span className="px-3 py-1.5 block text-slate-600 font-medium w-full rounded-lg hover:bg-slate-200/50">x-0b</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Reports Tree */}
                <div className="pt-2">
                    <div className="flex items-center justify-between group cursor-pointer mb-2">
                        <span className="font-semibold text-slate-800">Reports</span>
                        <button className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-slate-400 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">
                            <Plus size={14} />
                        </button>
                    </div>

                    <div className="relative pl-3 border-l-2 border-slate-200 ml-1.5 space-y-1">
                        {/* Expandable Group 1 */}
                        <div className="relative">
                            <div className="flex items-center justify-between pr-2 rounded-lg hover:bg-slate-200/50 cursor-pointer">
                                <div className="relative flex items-center flex-1">
                                    <div className="absolute -left-[14px] top-1/2 w-3 h-0.5 bg-slate-200"></div>
                                    <span className="px-3 py-1.5 block text-slate-800 font-medium">Share with me</span>
                                </div>
                                <ChevronUp size={14} className="text-slate-400" />
                            </div>

                            <div className="relative pl-3 border-l-2 border-slate-200 ml-1.5 mt-1 space-y-1">
                                <div className="relative flex items-center">
                                    <div className="absolute -left-[14px] top-1/2 w-3 h-0.5 bg-slate-200"></div>
                                    <span className="px-3 py-1.5 block text-slate-600 font-medium w-full rounded-lg hover:bg-slate-200/50">Deals by user</span>
                                </div>
                                <div className="relative flex items-center">
                                    <div className="absolute -left-[14px] top-1/2 w-3 h-0.5 bg-slate-200"></div>
                                    <span className="px-3 py-1.5 block text-slate-600 font-medium w-full rounded-lg hover:bg-slate-200/50">Deal duration</span>
                                </div>
                            </div>
                        </div>

                        {/* Expandable Group 2 */}
                        <div className="relative pt-1">
                            <div className="flex items-center justify-between pr-2 rounded-lg hover:bg-slate-200/50 cursor-pointer">
                                <div className="relative flex items-center flex-1">
                                    <div className="absolute -left-[14px] top-1/2 w-3 h-0.5 bg-slate-200"></div>
                                    <span className="px-3 py-1.5 block text-slate-800 font-medium">My reports</span>
                                </div>
                                <ChevronUp size={14} className="text-slate-400" />
                            </div>

                            <div className="relative pl-3 border-l-2 border-slate-200 ml-1.5 mt-1 space-y-1">
                                <div className="relative flex items-center">
                                    <div className="absolute -left-[14px] top-1/2 w-3 h-0.5 bg-slate-200"></div>
                                    <span className="px-3 py-1.5 block text-slate-600 font-medium w-full rounded-lg hover:bg-slate-200/50">Emails received</span>
                                </div>
                                <div className="relative flex items-center">
                                    <div className="absolute -left-[14px] top-1/2 w-3 h-0.5 bg-slate-200"></div>
                                    <span className="px-3 py-1.5 block text-slate-600 font-medium w-full rounded-lg hover:bg-slate-200/50">Deal duration</span>
                                </div>
                                <div className="relative flex items-center">
                                    <div className="absolute -left-[14px] top-1/2 w-3 h-0.5 bg-slate-200"></div>
                                    <span className="px-3 py-1.5 block text-[#f43f5e] font-medium w-full rounded-lg hover:bg-slate-200/50">New report</span>
                                </div>
                                <div className="relative flex items-center justify-between pr-2 rounded-lg hover:bg-slate-200/50">
                                    <div className="flex items-center relative flex-1">
                                        <div className="absolute -left-[14px] top-1/2 w-3 h-0.5 bg-slate-200"></div>
                                        <span className="px-3 py-1.5 block text-slate-800 font-medium">Analytics</span>
                                    </div>
                                    <span className="bg-[#f43f5e] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-md">7</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

            <div className="mt-auto px-6">
                <button className="flex items-center gap-3 text-slate-500 font-medium hover:text-slate-900 w-full">
                    <FolderPlus size={18} /> Manage folders
                </button>
            </div>
        </div>
    );
}
