import React from 'react';
import { Search, Bell, Menu, Plus } from 'lucide-react';
import { Avatar } from './Avatar';
import { IconButton, Button } from './Button';

export function Header() {
    return (
        <header className="flex items-center justify-between px-4 pt-6 pb-4 mb-2">
            <div className="relative group w-full max-w-[24rem]">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-slate-500 transition-colors" size={18} />
                <input
                    type="text"
                    placeholder="Try searching &quot;insights&quot;"
                    className="w-full pl-11 pr-5 py-3 bg-white rounded-full border-none outline-none ring-0 shadow-[0_2px_8px_rgba(0,0,0,0.02)] text-[14px] placeholder:text-slate-400 font-medium text-slate-600 transition-shadow focus:shadow-[0_4px_12px_rgba(0,0,0,0.04)]"
                />
            </div>

            <div className="flex items-center gap-4">
                <div className="bg-white rounded-full p-1 pl-1.5 pr-1 flex items-center shadow-sm border border-slate-100/50 gap-2">
                    <IconButton className="w-8 h-8 rounded-full hover:bg-slate-50">
                        <Menu size={18} className="text-slate-600" />
                    </IconButton>
                    <Avatar size="sm" className="w-[28px] h-[28px] ring-2 ring-white" src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                </div>

                <Button variant="danger" size="icon" className="rounded-full w-[42px] h-[42px] bg-[#f43f5e] hover:bg-[#e11d48] shadow-[0_4px_12px_rgba(244,63,94,0.4)] flex items-center justify-center p-0">
                    <Plus size={22} color="white" strokeWidth={2.5} />
                </Button>
            </div>
        </header>
    );
}
