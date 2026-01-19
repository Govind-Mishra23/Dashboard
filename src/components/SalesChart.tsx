import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './SalesChart.css';

const SalesChart: React.FC = () => {
  const data = [
    { name: 'Jan', sales: 4000, revenue: 2400, users: 2400 },
    { name: 'Feb', sales: 3000, revenue: 1398, users: 2210 },
    { name: 'Mar', sales: 2000, revenue: 9800, users: 2290 },
    { name: 'Apr', sales: 2780, revenue: 3908, users: 2000 },
    { name: 'May', sales: 1890, revenue: 4800, users: 2181 },
    { name: 'Jun', sales: 2390, revenue: 3800, users: 2500 },
    { name: 'Jul', sales: 3490, revenue: 4300, users: 2100 },
  ];

  return (
    <div className="sales-chart">
      <h2 className="chart-title">Sales Overview</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="sales" stroke="#3b82f6" strokeWidth={2} />
          <Line type="monotone" dataKey="revenue" stroke="#10b981" strokeWidth={2} />
          <Line type="monotone" dataKey="users" stroke="#f59e0b" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SalesChart;
