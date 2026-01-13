import React, { useState } from 'react';
import { Menu, X, LayoutDashboard, BarChart3, Users, Settings, TrendingUp } from 'lucide-react';
import StatsCard from './StatsCard';
import SalesChart from './SalesChart';
import RecentActivity from './RecentActivity';
import './Dashboard.css';

const Dashboard: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const stats = [
    {
      title: 'Total Revenue',
      value: '$45,231',
      change: '+20.1%',
      changeType: 'increase' as const,
      icon: <TrendingUp size={24} />
    },
    {
      title: 'Total Users',
      value: '2,451',
      change: '+15.3%',
      changeType: 'increase' as const,
      icon: <Users size={24} />
    },
    {
      title: 'Active Projects',
      value: '128',
      change: '-3.2%',
      changeType: 'decrease' as const,
      icon: <BarChart3 size={24} />
    },
    {
      title: 'Conversion Rate',
      value: '3.24%',
      change: '+5.4%',
      changeType: 'increase' as const,
      icon: <TrendingUp size={24} />
    }
  ];

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className={`sidebar ${sidebarOpen ? 'open' : 'closed'}`}>
        <div className="sidebar-header">
          <h2>{sidebarOpen && 'Dashboard'}</h2>
        </div>
        <nav className="sidebar-nav">
          <a href="#" className="nav-item active">
            <LayoutDashboard size={20} />
            {sidebarOpen && <span>Overview</span>}
          </a>
          <a href="#" className="nav-item">
            <BarChart3 size={20} />
            {sidebarOpen && <span>Analytics</span>}
          </a>
          <a href="#" className="nav-item">
            <Users size={20} />
            {sidebarOpen && <span>Users</span>}
          </a>
          <a href="#" className="nav-item">
            <Settings size={20} />
            {sidebarOpen && <span>Settings</span>}
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="main-content">
        {/* Header */}
        <header className="header">
          <button 
            className="menu-button"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <h1>Dashboard Overview</h1>
          <div className="header-right">
            <span className="user-info">Welcome, Admin</span>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="dashboard-content">
          {/* Stats Cards */}
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <StatsCard key={index} {...stat} />
            ))}
          </div>

          {/* Charts and Activity */}
          <div className="charts-section">
            <div className="chart-container">
              <SalesChart />
            </div>
            <div className="activity-container">
              <RecentActivity />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
