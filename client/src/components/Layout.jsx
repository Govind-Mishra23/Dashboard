import React from "react";
import { Sidebar } from "./Sidebar";
import { NavigationSidebar } from "./NavigationSidebar";
import { Header } from "./Header";

export function Layout({ children }) {
  return (
    <div className="min-h-screen bg-[#ebeae9] flex font-sans text-slate-600 relative overflow-hidden">
      {/* Sidebars - hidden on mobile */}
      <div className="hidden lg:block">
        <Sidebar />
      </div>
      <div className="hidden lg:block">
        <NavigationSidebar />
      </div>

      <main className="flex-1 lg:ml-[18rem] p-2 h-screen overflow-hidden flex flex-col">
        <Header />
        <div className="bg-white w-full flex-1 rounded-[1.5rem] lg:rounded-[2rem] flex flex-col overflow-hidden relative shadow-sm border border-white/50">
          <div className="overflow-y-auto h-full px-4 sm:px-6 lg:px-8 py-6 lg:py-8 no-scrollbar flex-1">
            <div className="max-w-[1400px] mx-auto">{children}</div>
          </div>
        </div>
      </main>
    </div>
  );
}
