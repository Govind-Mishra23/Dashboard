import React from 'react';
import { cn } from '../lib/utils';
import { IconButton } from './Button';

export function Sidebar() {
    const navItems = [
        { icon: ActivityIcon, active: false },
        { icon: BrandIcon, active: true },
        { icon: DocumentIcon, active: false },
        { icon: CommandIcon, active: false },
        { icon: LayersIcon, active: false }, // Replaces FolderOpen for the cards icon
    ];

    return (
        <aside className="w-20 pl-4 py-7 flex flex-col items-center shrink-0 fixed top-0 left-0 h-screen z-10">
            <div className="mb-8">
                <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="black" />
                        <path d="M13.5 16.5C14.5 16.5 15.5 16 16 15.5" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                        <path d="M16 8.5C15.5 8 14.5 7.5 13.5 7.5C11.0147 7.5 9 9.51472 9 12C9 14.4853 11.0147 16.5 13.5 16.5" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                    </svg>
                    <span className="sr-only">C</span>
                </div>
            </div>

            <nav className="flex flex-col gap-4 flex-1">
                {navItems.map((item, idx) => (
                    <IconButton
                        key={idx}
                        className={cn("w-10 h-10 rounded-xl flex items-center justify-center", item.active ? "bg-[#e11d48] text-white hover:bg-[#be123c] hover:text-white" : "text-slate-900 bg-white border border-slate-100")}
                    >
                        <item.icon active={item.active} />
                    </IconButton>
                ))}
            </nav>

            <div className="flex flex-col gap-4 mt-auto">
                <IconButton className="w-10 h-10 rounded-full border border-slate-200 bg-white text-slate-900">
                    <MessageIcon />
                    <div className="absolute top-0 right-0 w-2.5 h-2.5 bg-[#e11d48] rounded-full ring-2 ring-white"></div>
                </IconButton>
                <IconButton className="w-10 h-10 rounded-full border border-slate-200 bg-white text-slate-900">
                    <SettingsIcon />
                </IconButton>
            </div>
        </aside>
    );
}

function ActivityIcon({ active }) {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <path d="M8 12L10 14L13 10L16 12" />
        </svg>
    )
}

function BrandIcon() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 10V6C4 4.89543 4.89543 4 6 4H8" />
            <path d="M8 4V14C8 15.1046 8.89543 16 10 16H14" />
            <rect x="14" y="12" width="6" height="6" rx="2" />
            <path d="M8 10H14" />
        </svg>
    )
}

function DocumentIcon() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14.5 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V7.5L14.5 2Z" />
            <path d="M14 2V8H20" />
            <line x1="8" y1="13" x2="16" y2="13" />
            <line x1="8" y1="17" x2="12" y2="17" />
            <line x1="8" y1="9" x2="10" y2="9" />
        </svg>
    )
}

function CommandIcon() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 6V12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12V18" />
            <rect x="15" y="4" width="4" height="4" rx="1" />
            <rect x="5" y="16" width="4" height="4" rx="1" />
            <rect x="15" y="16" width="4" height="4" rx="1" />
            <rect x="5" y="4" width="4" height="4" rx="1" />
        </svg>
    )
}

function LayersIcon() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="10" width="12" height="12" rx="3" />
            <rect x="9" y="4" width="12" height="12" rx="3" opacity="0.8" />
        </svg>
    )
}

function MessageIcon() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
    )
}

function SettingsIcon() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.09a2 2 0 0 1-1-1.74v-.47a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
            <circle cx="12" cy="12" r="3" />
        </svg>
    )
}
