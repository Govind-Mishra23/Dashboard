import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import './StatsCard.css';

interface StatsCardProps {
  title: string;
  value: string;
  change: string;
  changeType: 'increase' | 'decrease';
  icon: React.ReactNode;
}

const StatsCard: React.FC<StatsCardProps> = ({ title, value, change, changeType, icon }) => {
  return (
    <div className="stats-card">
      <div className="stats-card-header">
        <div className="stats-icon">{icon}</div>
        <span className={`stats-change ${changeType}`}>
          {changeType === 'increase' ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
          {change}
        </span>
      </div>
      <h3 className="stats-value">{value}</h3>
      <p className="stats-title">{title}</p>
    </div>
  );
};

export default StatsCard;
