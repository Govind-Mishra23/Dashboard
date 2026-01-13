import React from "react";
import { cn } from "../lib/utils";

export function Avatar({ src, alt, fallback, className, size = "md" }) {
  const sizeClasses = {
    xs: "w-6 h-6",
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12",
  };

  return (
    <div
      className={cn(
        "relative rounded-full overflow-hidden bg-slate-200 shrink-0",
        sizeClasses[size],
        className
      )}
    >
      {src ? (
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      ) : (
        <div className="w-full h-full flex items-center justify-center text-slate-500 font-medium text-sm">
          {fallback || alt?.charAt(0).toUpperCase()}
        </div>
      )}
    </div>
  );
}
