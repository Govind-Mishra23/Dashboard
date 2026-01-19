import React from 'react';
import { User, ShoppingCart, AlertCircle, CheckCircle } from 'lucide-react';
import './RecentActivity.css';

const RecentActivity: React.FC = () => {
  const activities = [
    {
      id: 1,
      icon: <User size={20} />,
      title: 'New user registered',
      time: '2 minutes ago',
      type: 'user'
    },
    {
      id: 2,
      icon: <ShoppingCart size={20} />,
      title: 'New order placed',
      time: '15 minutes ago',
      type: 'order'
    },
    {
      id: 3,
      icon: <CheckCircle size={20} />,
      title: 'Payment received',
      time: '1 hour ago',
      type: 'success'
    },
    {
      id: 4,
      icon: <AlertCircle size={20} />,
      title: 'Server issue resolved',
      time: '2 hours ago',
      type: 'alert'
    },
    {
      id: 5,
      icon: <User size={20} />,
      title: 'User profile updated',
      time: '3 hours ago',
      type: 'user'
    }
  ];

  return (
    <div className="recent-activity">
      <h2 className="activity-title">Recent Activity</h2>
      <div className="activity-list">
        {activities.map((activity) => (
          <div key={activity.id} className="activity-item">
            <div className={`activity-icon ${activity.type}`}>
              {activity.icon}
            </div>
            <div className="activity-content">
              <p className="activity-text">{activity.title}</p>
              <span className="activity-time">{activity.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;
