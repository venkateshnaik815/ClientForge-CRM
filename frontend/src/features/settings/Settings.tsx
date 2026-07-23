import { useState } from 'react';
import { User, Lock, Bell, Building } from 'lucide-react';

export const Settings = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      alert('Settings saved successfully!');
    }, 800);
  };

  return (
    <div className="h-full space-y-6 max-w-5xl mx-auto pb-10">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">System Settings</h1>
        <p className="text-sm text-gray-500 mt-1">Manage your account settings and preferences.</p>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar Tabs */}
        <div className="w-full md:w-64 space-y-1">
          <button 
            onClick={() => setActiveTab('profile')}
            className={`w-full flex items-center px-3 py-2.5 text-sm font-bold rounded-lg transition ${activeTab === 'profile' ? 'bg-indigo-50 text-indigo-700' : 'text-gray-700 hover:bg-gray-100'}`}
          >
            <User className="w-4 h-4 mr-3" /> Profile
          </button>
          <button 
            onClick={() => setActiveTab('organization')}
            className={`w-full flex items-center px-3 py-2.5 text-sm font-bold rounded-lg transition ${activeTab === 'organization' ? 'bg-indigo-50 text-indigo-700' : 'text-gray-700 hover:bg-gray-100'}`}
          >
            <Building className="w-4 h-4 mr-3" /> Organization
          </button>
          <button 
            onClick={() => setActiveTab('security')}
            className={`w-full flex items-center px-3 py-2.5 text-sm font-bold rounded-lg transition ${activeTab === 'security' ? 'bg-indigo-50 text-indigo-700' : 'text-gray-700 hover:bg-gray-100'}`}
          >
            <Lock className="w-4 h-4 mr-3" /> Security
          </button>
          <button 
            onClick={() => setActiveTab('notifications')}
            className={`w-full flex items-center px-3 py-2.5 text-sm font-bold rounded-lg transition ${activeTab === 'notifications' ? 'bg-indigo-50 text-indigo-700' : 'text-gray-700 hover:bg-gray-100'}`}
          >
            <Bell className="w-4 h-4 mr-3" /> Notifications
          </button>
        </div>

        {/* Tab Content */}
        <div className="flex-1">
          <div className="bg-white shadow-sm border border-gray-200 rounded-xl transition-all">
            
            {activeTab === 'profile' && (
              <>
                <div className="px-6 py-5 border-b border-gray-100">
                  <h2 className="text-lg font-bold text-gray-900">Profile Information</h2>
                  <p className="text-sm text-gray-500 mt-1">Update your account's profile information and email address.</p>
                </div>
                <div className="p-6 space-y-6">
                  <div className="flex items-center space-x-6">
                    <div className="w-20 h-20 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-3xl border-4 border-white shadow-md">
                      VN
                    </div>
                    <button onClick={() => alert('Photo upload dialog would open here.')} className="px-4 py-2 border border-gray-300 shadow-sm text-sm font-bold rounded-lg text-gray-700 hover:bg-gray-50 transition active:bg-gray-100">
                      Change Photo
                    </button>
                  </div>
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label className="block text-sm font-bold text-gray-700">First Name</label>
                      <input type="text" defaultValue="Venkatesh" className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700">Last Name</label>
                      <input type="text" defaultValue="Naik" className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="block text-sm font-bold text-gray-700">Email Address</label>
                      <input type="email" defaultValue="admin@clientforge.com" className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="block text-sm font-bold text-gray-700">Job Title</label>
                      <input type="text" defaultValue="System Administrator" className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    </div>
                  </div>
                </div>
              </>
            )}

            {activeTab === 'organization' && (
              <>
                <div className="px-6 py-5 border-b border-gray-100">
                  <h2 className="text-lg font-bold text-gray-900">Organization Settings</h2>
                  <p className="text-sm text-gray-500 mt-1">Manage your company details and branding.</p>
                </div>
                <div className="p-6 space-y-6">
                  <div className="grid grid-cols-1 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-700">Company Name</label>
                      <input type="text" defaultValue="ClientForge Solutions" className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700">Industry</label>
                      <select className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                        <option>Software / Technology</option>
                        <option>Finance</option>
                        <option>Healthcare</option>
                      </select>
                    </div>
                  </div>
                </div>
              </>
            )}

            {activeTab === 'security' && (
              <>
                <div className="px-6 py-5 border-b border-gray-100">
                  <h2 className="text-lg font-bold text-gray-900">Security & Passwords</h2>
                  <p className="text-sm text-gray-500 mt-1">Keep your account secure with strong passwords and 2FA.</p>
                </div>
                <div className="p-6 space-y-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700">Current Password</label>
                    <input type="password" placeholder="••••••••" className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700">New Password</label>
                    <input type="password" placeholder="Enter new password" className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                  </div>
                  <div className="pt-4 flex items-center justify-between border-t border-gray-100">
                    <div>
                      <h4 className="text-sm font-bold text-gray-900">Two-Factor Authentication</h4>
                      <p className="text-xs text-gray-500 mt-0.5">Add an extra layer of security to your account.</p>
                    </div>
                    <button className="px-4 py-2 border border-gray-300 shadow-sm text-sm font-bold rounded-lg text-gray-700 hover:bg-gray-50 transition">Enable 2FA</button>
                  </div>
                </div>
              </>
            )}

            {activeTab === 'notifications' && (
              <>
                <div className="px-6 py-5 border-b border-gray-100">
                  <h2 className="text-lg font-bold text-gray-900">Notification Preferences</h2>
                  <p className="text-sm text-gray-500 mt-1">Control when and how you receive alerts.</p>
                </div>
                <div className="p-6 space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-gray-900">Email Alerts</h4>
                      <p className="text-xs text-gray-500 mt-0.5">Receive daily summaries of new leads and activities.</p>
                    </div>
                    <input type="checkbox" defaultChecked className="w-5 h-5 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500 cursor-pointer" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-gray-900">Desktop Notifications</h4>
                      <p className="text-xs text-gray-500 mt-0.5">Get notified immediately when a client signs a contract.</p>
                    </div>
                    <input type="checkbox" defaultChecked className="w-5 h-5 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500 cursor-pointer" />
                  </div>
                </div>
              </>
            )}

            <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 rounded-b-xl flex justify-end">
              <button 
                onClick={handleSave} 
                disabled={isSaving}
                className="px-5 py-2 bg-indigo-600 text-white rounded-lg text-sm font-bold hover:bg-indigo-700 shadow-sm transition active:scale-95 disabled:opacity-70 flex items-center justify-center min-w-[120px]"
              >
                {isSaving ? 'Saving...' : 'Save Changes'}
              </button>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};
