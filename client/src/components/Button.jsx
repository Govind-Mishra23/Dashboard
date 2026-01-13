import React from 'react';
import { cn } from '../lib/utils';

export function Button({ className, variant = 'primary', size = 'md', children, ...props }) {
    const base = "inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none rounded-xl";

    const variants = {
        primary: "bg-slate-900 text-white hover:bg-slate-800",
        secondary: "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50",
        ghost: "text-slate-600 hover:bg-slate-100",
        danger: "bg-rose-600 text-white hover:bg-rose-700",
    };

    const sizes = {
        sm: "h-8 px-3 text-xs",
        md: "h-10 px-4 text-sm",
        lg: "h-12 px-6 text-base",
        icon: "h-10 w-10 p-0",
    };

    return (
        <button className={cn(base, variants[variant], sizes[size], className)} {...props}>
            {children}
        </button>
    );
}

export function IconButton({ className, children, ...props }) {
    return (
        <button className={cn("p-2 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors", className)} {...props}>
            {children}
        </button>
    )
}
