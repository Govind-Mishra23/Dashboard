import React from "react";
import { Layout } from "./components/Layout";
import { DashboardHeader } from "./components/DashboardHeader";
import { StatsRow } from "./components/StatsRow";
import { BottomSection } from "./components/BottomSection";
import { SourceStats } from "./components/SourceStats";
import { DealsChart } from "./components/DealsChart";
import { RightPanel } from "./components/RightPanel";

function App() {
  return (
    <Layout>x
      <DashboardHeader />
      <StatsRow />

      {/* Main Content Grid: 50/50 split */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 bg-white">
        {/* Left Column: Stats + Charts + Bottom Section */}
        <div className="flex flex-col gap-6">
          {/* Top Row: SourceStats + DealsChart */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <SourceStats />
            <DealsChart />
          </div>

          {/* Bottom Section */}
          <BottomSection />
        </div>

        {/* Right Column: Full Height Panel */}
        <div className="h-full">
          <RightPanel />
        </div>
      </div>
    </Layout>
  );
}

export default App;
