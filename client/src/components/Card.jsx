import React from "react";
import { cn } from "../lib/utils";

export function Card({ className, children, ...props }) {
  return (
    <div className={cn("bg-white rounded-2xl p-4", className)} {...props}>
      {children}
    </div>
  );
}
