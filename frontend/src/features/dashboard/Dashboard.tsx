import React from 'react';
import { Users, TrendingUp, DollarSign, Activity } from 'lucide-react';

export const Dashboard = () => {
  const stats = [
    { label: 'Total Leads', value: '142', icon: Users, color: 'bg-blue-500' },
    { label: 'Conversion Rate', value: '24.5%', icon: TrendingUp, color: 'bg-green-500' },
    { label: 'Revenue Forecast', value: '$124,500', icon: DollarSign, color: 'bg-indigo-500' },
    { label: 'Active Tasks', value: '28', icon: Activity, color: 'bg-orange-500' },
  ];

  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">Dashboard Overview</h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div key={idx} className="bg-white rounded-lg shadow p-6 flex items-center">
              <div className={`p-3 rounded-full ${stat.color} text-white mr-4`}>
                <Icon className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">{stat.label}</p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Placeholder for Charts/Tables */}
      <div className="mt-8 bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Recent Activity</h2>
        <div className="border-t border-gray-200 pt-4">
          <p className="text-gray-500 text-sm">Activity feed will be populated from the backend...</p>
        </div>
      </div>
    </div>
  );
};
