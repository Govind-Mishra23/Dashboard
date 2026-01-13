import React, { useState } from 'react';
import { Star, Clock, Plus, ChevronUp, ChevronDown, FolderPlus } from 'lucide-react';
import { cn } from '../lib/utils';
import { Badge } from './Badge';

export function NavigationSidebar() {
    // State management
    const [expandedSections, setExpandedSections] = useState({
        dashboardSharedWithMe: true,
        reportsShareWithMe: true,
        reportsMyReports: true
    });
    const [activeItem, setActiveItem] = useState('New report');
    const [showDropdown, setShowDropdown] = useState(false);

    // Toggle section expand/collapse
    const toggleSection = (sectionKey) => {
        setExpandedSections(prev => ({
            ...prev,
            [sectionKey]: !prev[sectionKey]
        }));
    };

    // Set active menu item
    const handleItemClick = (itemName) => {
        setActiveItem(itemName);
    };

    return (
        <div className="w-52 pt-9 pb-4 flex flex-col h-screen fixed left-20 top-0 bg-transparent z-0 overflow-y-auto no-scrollbar text-sm">
            <div className="px-6 mb-6">
                <div
                    className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
                    onClick={() => setShowDropdown(!showDropdown)}
                >
                    <h2 className="font-bold text-slate-700 text-[15px]">Codename.com</h2>
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className={cn("text-slate-400 transition-transform", showDropdown && "rotate-180")}>
                        <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
                {showDropdown && (
                    <div className="mt-2 bg-white rounded-lg shadow-lg p-2 space-y-1">
                        <div className="px-3 py-2 hover:bg-slate-100 rounded cursor-pointer text-slate-600 text-sm">Switch workspace</div>
                        <div className="px-3 py-2 hover:bg-slate-100 rounded cursor-pointer text-slate-600 text-sm">Settings</div>
                    </div>
                )}
            </div>

            <div className="px-6 space-y-4 mb-8">
                {/* Top Links */}
                <div className="space-y-3">
                    <div
                        onClick={() => handleItemClick('Starred')}
                        className={cn(
                            "flex items-center gap-3 font-medium cursor-pointer rounded-lg px-2 py-1.5 transition-colors",
                            activeItem === 'Starred' ? 'bg-slate-200 text-slate-900' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'
                        )}
                    >
                        <Star size={18} /> Starred
                    </div>
                    <div
                        onClick={() => handleItemClick('Recent')}
                        className={cn(
                            "flex items-center gap-3 font-medium cursor-pointer rounded-lg px-2 py-1.5 transition-colors",
                            activeItem === 'Recent' ? 'bg-slate-200 text-slate-900' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'
                        )}
                    >
                        <Clock size={18} /> Recent
                    </div>
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
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                console.log('Add new dashboard item');
                            }}
                            className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-slate-400 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity hover:text-slate-600"
                        >
                            <Plus size={14} />
                        </button>
                    </div>

                    <div className="relative pl-3 border-l-2 border-slate-200 ml-1.5 space-y-1">
                        {/* Item 1 */}
                        <div className="relative flex items-center">
                            <div className="absolute -left-[14px] top-1/2 w-3 h-0.5 bg-slate-200"></div>
                            <span
                                onClick={() => handleItemClick('Codename')}
                                className={cn(
                                    "px-3 py-1.5 block font-medium w-full rounded-lg cursor-pointer transition-colors",
                                    activeItem === 'Codename' ? 'bg-slate-200 text-slate-900' : 'text-slate-600 hover:bg-slate-200/50'
                                )}
                            >
                                Codename
                            </span>
                        </div>

                        {/* Item 2 - Expandable */}
                        <div className="relative">
                            <div
                                onClick={() => toggleSection('dashboardSharedWithMe')}
                                className="flex items-center justify-between pr-2 rounded-lg hover:bg-slate-200/50 cursor-pointer"
                            >
                                <div className="relative flex items-center flex-1">
                                    <div className="absolute -left-[14px] top-1/2 w-3 h-0.5 bg-slate-200"></div>
                                    <span className="px-3 py-1.5 block text-slate-800 font-medium">Shared with me</span>
                                </div>
                                {expandedSections.dashboardSharedWithMe ?
                                    <ChevronUp size={14} className="text-slate-400" /> :
                                    <ChevronDown size={14} className="text-slate-400" />
                                }
                            </div>

                            {/* Sub Tree */}
                            {expandedSections.dashboardSharedWithMe && (
                                <div className="relative pl-3 border-l-2 border-slate-200 ml-1.5 mt-1 space-y-1">
                                    <div className="relative flex items-center">
                                        <div className="absolute -left-[14px] top-1/2 w-3 h-0.5 bg-slate-200"></div>
                                        <span
                                            onClick={() => handleItemClick('Cargo2go')}
                                            className={cn(
                                                "px-3 py-1.5 block font-medium w-full rounded-lg cursor-pointer transition-colors",
                                                activeItem === 'Cargo2go' ? 'bg-slate-200 text-slate-900' : 'text-slate-600 hover:bg-slate-200/50'
                                            )}
                                        >
                                            Cargo2go
                                        </span>
                                    </div>
                                    <div className="relative flex items-center justify-between pr-2 rounded-lg hover:bg-slate-200/50">
                                        <div className="flex items-center relative flex-1">
                                            <div className="absolute -left-[14px] top-1/2 w-3 h-0.5 bg-slate-200"></div>
                                            <span
                                                onClick={() => handleItemClick('Cloudz3r')}
                                                className={cn(
                                                    "px-3 py-1.5 block font-medium cursor-pointer transition-colors",
                                                    activeItem === 'Cloudz3r' ? 'text-slate-900' : 'text-slate-800'
                                                )}
                                            >
                                                Cloudz3r
                                            </span>
                                        </div>
                                        <span className="bg-[#f43f5e] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-md">2</span>
                                    </div>
                                    <div className="relative flex items-center">
                                        <div className="absolute -left-[14px] top-1/2 w-3 h-0.5 bg-slate-200"></div>
                                        <span
                                            onClick={() => handleItemClick('Idioma')}
                                            className={cn(
                                                "px-3 py-1.5 block font-medium w-full rounded-lg cursor-pointer transition-colors",
                                                activeItem === 'Idioma' ? 'bg-slate-200 text-slate-900' : 'text-slate-600 hover:bg-slate-200/50'
                                            )}
                                        >
                                            Idioma
                                        </span>
                                    </div>
                                    <div className="relative flex items-center">
                                        <div className="absolute -left-[14px] top-1/2 w-3 h-0.5 bg-slate-200"></div>
                                        <span
                                            onClick={() => handleItemClick('Syllables')}
                                            className={cn(
                                                "px-3 py-1.5 block font-medium w-full rounded-lg cursor-pointer transition-colors",
                                                activeItem === 'Syllables' ? 'bg-slate-200 text-slate-900' : 'text-slate-600 hover:bg-slate-200/50'
                                            )}
                                        >
                                            Syllables
                                        </span>
                                    </div>
                                    <div className="relative flex items-center">
                                        <div className="absolute -left-[14px] top-1/2 w-3 h-0.5 bg-slate-200"></div>
                                        <span
                                            onClick={() => handleItemClick('x-0b')}
                                            className={cn(
                                                "px-3 py-1.5 block font-medium w-full rounded-lg cursor-pointer transition-colors",
                                                activeItem === 'x-0b' ? 'bg-slate-200 text-slate-900' : 'text-slate-600 hover:bg-slate-200/50'
                                            )}
                                        >
                                            x-0b
                                        </span>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Reports Tree */}
                <div className="pt-2">
                    <div className="flex items-center justify-between group cursor-pointer mb-2">
                        <span className="font-semibold text-slate-800">Reports</span>
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                console.log('Add new report');
                            }}
                            className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-slate-400 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity hover:text-slate-600"
                        >
                            <Plus size={14} />
                        </button>
                    </div>

                    <div className="relative pl-3 border-l-2 border-slate-200 ml-1.5 space-y-1">
                        {/* Expandable Group 1 */}
                        <div className="relative">
                            <div
                                onClick={() => toggleSection('reportsShareWithMe')}
                                className="flex items-center justify-between pr-2 rounded-lg hover:bg-slate-200/50 cursor-pointer"
                            >
                                <div className="relative flex items-center flex-1">
                                    <div className="absolute -left-[14px] top-1/2 w-3 h-0.5 bg-slate-200"></div>
                                    <span className="px-3 py-1.5 block text-slate-800 font-medium">Share with me</span>
                                </div>
                                {expandedSections.reportsShareWithMe ?
                                    <ChevronUp size={14} className="text-slate-400" /> :
                                    <ChevronDown size={14} className="text-slate-400" />
                                }
                            </div>

                            {expandedSections.reportsShareWithMe && (
                                <div className="relative pl-3 border-l-2 border-slate-200 ml-1.5 mt-1 space-y-1">
                                    <div className="relative flex items-center">
                                        <div className="absolute -left-[14px] top-1/2 w-3 h-0.5 bg-slate-200"></div>
                                        <span
                                            onClick={() => handleItemClick('Deals by user')}
                                            className={cn(
                                                "px-3 py-1.5 block font-medium w-full rounded-lg cursor-pointer transition-colors",
                                                activeItem === 'Deals by user' ? 'bg-slate-200 text-slate-900' : 'text-slate-600 hover:bg-slate-200/50'
                                            )}
                                        >
                                            Deals by user
                                        </span>
                                    </div>
                                    <div className="relative flex items-center">
                                        <div className="absolute -left-[14px] top-1/2 w-3 h-0.5 bg-slate-200"></div>
                                        <span
                                            onClick={() => handleItemClick('Deal duration')}
                                            className={cn(
                                                "px-3 py-1.5 block font-medium w-full rounded-lg cursor-pointer transition-colors",
                                                activeItem === 'Deal duration' ? 'bg-slate-200 text-slate-900' : 'text-slate-600 hover:bg-slate-200/50'
                                            )}
                                        >
                                            Deal duration
                                        </span>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Expandable Group 2 */}
                        <div className="relative pt-1">
                            <div
                                onClick={() => toggleSection('reportsMyReports')}
                                className="flex items-center justify-between pr-2 rounded-lg hover:bg-slate-200/50 cursor-pointer"
                            >
                                <div className="relative flex items-center flex-1">
                                    <div className="absolute -left-[14px] top-1/2 w-3 h-0.5 bg-slate-200"></div>
                                    <span className="px-3 py-1.5 block text-slate-800 font-medium">My reports</span>
                                </div>
                                {expandedSections.reportsMyReports ?
                                    <ChevronUp size={14} className="text-slate-400" /> :
                                    <ChevronDown size={14} className="text-slate-400" />
                                }
                            </div>

                            {expandedSections.reportsMyReports && (
                                <div className="relative pl-3 border-l-2 border-slate-200 ml-1.5 mt-1 space-y-1">
                                    <div className="relative flex items-center">
                                        <div className="absolute -left-[14px] top-1/2 w-3 h-0.5 bg-slate-200"></div>
                                        <span
                                            onClick={() => handleItemClick('Emails received')}
                                            className={cn(
                                                "px-3 py-1.5 block font-medium w-full rounded-lg cursor-pointer transition-colors",
                                                activeItem === 'Emails received' ? 'bg-slate-200 text-slate-900' : 'text-slate-600 hover:bg-slate-200/50'
                                            )}
                                        >
                                            Emails received
                                        </span>
                                    </div>
                                    <div className="relative flex items-center">
                                        <div className="absolute -left-[14px] top-1/2 w-3 h-0.5 bg-slate-200"></div>
                                        <span
                                            onClick={() => handleItemClick('Deal duration 2')}
                                            className={cn(
                                                "px-3 py-1.5 block font-medium w-full rounded-lg cursor-pointer transition-colors",
                                                activeItem === 'Deal duration 2' ? 'bg-slate-200 text-slate-900' : 'text-slate-600 hover:bg-slate-200/50'
                                            )}
                                        >
                                            Deal duration
                                        </span>
                                    </div>
                                    <div className="relative flex items-center">
                                        <div className="absolute -left-[14px] top-1/2 w-3 h-0.5 bg-slate-200"></div>
                                        <span
                                            onClick={() => handleItemClick('New report')}
                                            className={cn(
                                                "px-3 py-1.5 block font-medium w-full rounded-lg cursor-pointer transition-colors",
                                                activeItem === 'New report' ? 'bg-slate-200 text-[#f43f5e]' : 'text-[#f43f5e] hover:bg-slate-200/50'
                                            )}
                                        >
                                            New report
                                        </span>
                                    </div>
                                    <div className="relative flex items-center justify-between pr-2 rounded-lg hover:bg-slate-200/50">
                                        <div className="flex items-center relative flex-1">
                                            <div className="absolute -left-[14px] top-1/2 w-3 h-0.5 bg-slate-200"></div>
                                            <span
                                                onClick={() => handleItemClick('Analytics')}
                                                className={cn(
                                                    "px-3 py-1.5 block font-medium cursor-pointer transition-colors",
                                                    activeItem === 'Analytics' ? 'text-slate-900' : 'text-slate-800'
                                                )}
                                            >
                                                Analytics
                                            </span>
                                        </div>
                                        <span className="bg-[#f43f5e] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-md">7</span>
                                    </div>
                                </div>
                            )}
                        </div>

                    </div>
                </div>

            </div>

            <div className="mt-auto px-6">
                <button
                    onClick={() => handleItemClick('Manage folders')}
                    className={cn(
                        "flex items-center gap-3 font-medium w-full rounded-lg px-2 py-1.5 transition-colors",
                        activeItem === 'Manage folders' ? 'bg-slate-200 text-slate-900' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'
                    )}
                >
                    <FolderPlus size={18} /> Manage folders
                </button>
            </div>
        </div>
    );
}
