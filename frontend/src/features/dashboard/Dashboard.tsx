import React, { useState } from 'react';
import { DollarSign, Users, Target, TrendingUp, ArrowUpRight, ArrowDownRight, Clock, CheckCircle2, X } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const chartData = [
  { name: 'Jan', revenue: 4000, leads: 240 },
  { name: 'Feb', revenue: 5200, leads: 310 },
  { name: 'Mar', revenue: 3800, leads: 280 },
  { name: 'Apr', revenue: 6500, leads: 420 },
  { name: 'May', revenue: 7800, leads: 490 },
  { name: 'Jun', revenue: 8400, leads: 520 },
  { name: 'Jul', revenue: 9900, leads: 600 },
];

const stats = [
  { name: 'Total Revenue', value: '$124,500', change: '+14.2%', trend: 'up', icon: DollarSign },
  { name: 'Active Clients', value: '142', change: '+5.4%', trend: 'up', icon: Users },
  { name: 'New Leads', value: '1,234', change: '-2.1%', trend: 'down', icon: Target },
  { name: 'Conversion Rate', value: '24.5%', change: '+4.3%', trend: 'up', icon: TrendingUp },
];

const activities = [
  { id: 1, text: 'Alice Freeman accepted the proposal', time: '2 hours ago', icon: CheckCircle2, color: 'text-green-500' },
  { id: 2, text: 'New lead assigned: TechNova', time: '4 hours ago', icon: Users, color: 'text-blue-500' },
  { id: 3, text: 'Meeting scheduled with Initech', time: '5 hours ago', icon: Clock, color: 'text-orange-500' },
  { id: 4, text: 'Contract signed by Globex Corp', time: '1 day ago', icon: CheckCircle2, color: 'text-green-500' },
];

export const Dashboard = () => {
  const [isCampaignModalOpen, setIsCampaignModalOpen] = useState(false);
  const [campaignName, setCampaignName] = useState('');

  const handleExport = () => {
    // Generate a real CSV file and trigger download
    const csvContent = "data:text/csv;charset=utf-8," 
      + "Month,Revenue,Leads\n"
      + chartData.map(e => `${e.name},${e.revenue},${e.leads}`).join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "ClientForge_Dashboard_Report.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleCreateCampaign = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Campaign "${campaignName}" launched successfully! Emails are being prepared.`);
    setIsCampaignModalOpen(false);
    setCampaignName('');
  };

  return (
    <div className="space-y-6 relative">
      <div className="flex justify-between items-center mb-2">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
          <p className="text-sm text-gray-500 mt-1">Welcome back, Admin. Here is what's happening today.</p>
        </div>
        <div className="flex space-x-3">
          <button 
            onClick={handleExport}
            className="px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 transition active:bg-gray-100"
          >
            Export Report
          </button>
          <button 
            onClick={() => setIsCampaignModalOpen(true)}
            className="px-4 py-2 bg-indigo-600 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-indigo-700 transition active:bg-indigo-800"
          >
            New Campaign
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.name} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col hover:shadow-md transition">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center">
                <stat.icon className="w-5 h-5 text-indigo-600" />
              </div>
              <span className={`inline-flex items-center text-sm font-semibold ${stat.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                {stat.trend === 'up' ? <ArrowUpRight className="w-4 h-4 mr-1" /> : <ArrowDownRight className="w-4 h-4 mr-1" />}
                {stat.change}
              </span>
            </div>
            <h3 className="text-gray-500 text-sm font-medium">{stat.name}</h3>
            <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-bold text-gray-900">Revenue & Leads Forecast</h2>
            <select className="text-sm border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 py-1 pl-3 pr-8">
              <option>Last 7 months</option>
              <option>Last 30 days</option>
              <option>This Year</option>
            </select>
          </div>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#4f46e5" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#6b7280', fontSize: 12 }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#6b7280', fontSize: 12 }} />
                <Tooltip 
                  contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
                  itemStyle={{ fontWeight: 500 }}
                />
                <Area type="monotone" dataKey="revenue" stroke="#4f46e5" strokeWidth={3} fillOpacity={1} fill="url(#colorRevenue)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-6">Recent Activity</h2>
          <div className="space-y-6">
            {activities.map((activity, index) => (
              <div key={activity.id} className="flex relative">
                {index !== activities.length - 1 && (
                  <div className="absolute top-8 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"></div>
                )}
                <div className="relative flex items-start space-x-3">
                  <div className={`relative px-1 py-1 bg-white rounded-full flex items-center justify-center ring-8 ring-white`}>
                    <activity.icon className={`w-5 h-5 ${activity.color}`} />
                  </div>
                  <div className="min-w-0 flex-1 py-1.5">
                    <div className="text-sm text-gray-800 font-medium">
                      {activity.text}
                    </div>
                    <div className="mt-1 flex text-xs text-gray-500">
                      <span>{activity.time}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button onClick={() => alert('Loading full activity history...')} className="w-full mt-6 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 transition active:bg-gray-100">
            View All Activity
          </button>
        </div>
      </div>

      {/* New Campaign Modal */}
      {isCampaignModalOpen && (
        <div className="fixed inset-0 bg-gray-900/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-2xl max-w-md w-full overflow-hidden transform transition-all">
            <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
              <h3 className="text-lg font-bold text-gray-900">Create New Campaign</h3>
              <button onClick={() => setIsCampaignModalOpen(false)} className="text-gray-400 hover:text-gray-700">
                <X className="w-5 h-5" />
              </button>
            </div>
            <form onSubmit={handleCreateCampaign} className="p-6 space-y-5">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Campaign Name</label>
                <input required type="text" placeholder="e.g. Q4 Outreach" value={campaignName} onChange={e => setCampaignName(e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Target Audience</label>
                <select className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
                  <option>All Active Clients</option>
                  <option>New Leads (Last 30 Days)</option>
                  <option>Enterprise Clients</option>
                </select>
              </div>
              <div className="pt-4 flex justify-end space-x-3 border-t border-gray-100 mt-6">
                <button type="button" onClick={() => setIsCampaignModalOpen(false)} className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-bold text-gray-700 hover:bg-gray-50">Cancel</button>
                <button type="submit" className="px-4 py-2 bg-indigo-600 rounded-lg text-sm font-bold text-white hover:bg-indigo-700">Launch Campaign</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
