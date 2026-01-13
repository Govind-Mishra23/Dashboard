import React from 'react';
import { cn } from '../lib/utils';

export function Badge({ className, variant = 'default', children, ...props }) {
    const variants = {
        default: "bg-slate-100 text-slate-600",
        success: "bg-emerald-50 text-emerald-600",
        warning: "bg-amber-50 text-amber-600",
        danger: "bg-rose-50 text-rose-600",
        brand: "bg-pink-100 text-pink-600",
        dark: "bg-slate-800 text-white",
    };

    return (
        <span className={cn("px-2.5 py-0.5 rounded-full text-xs font-medium inline-flex items-center", variants[variant], className)} {...props}>
            {children}
        </span>
    );
}
