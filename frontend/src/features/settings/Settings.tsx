import React from 'react';
import { User, Lock, Bell, Building } from 'lucide-react';

export const Settings = () => {
  return (
    <div className="h-full space-y-6 max-w-5xl mx-auto pb-10">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">System Settings</h1>
        <p className="text-sm text-gray-500 mt-1">Manage your account settings and preferences.</p>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-64 space-y-1">
          <button className="w-full flex items-center px-3 py-2.5 text-sm font-bold rounded-lg bg-indigo-50 text-indigo-700">
            <User className="w-4 h-4 mr-3" /> Profile
          </button>
          <button className="w-full flex items-center px-3 py-2.5 text-sm font-medium rounded-lg text-gray-700 hover:bg-gray-100 transition">
            <Building className="w-4 h-4 mr-3" /> Organization
          </button>
          <button className="w-full flex items-center px-3 py-2.5 text-sm font-medium rounded-lg text-gray-700 hover:bg-gray-100 transition">
            <Lock className="w-4 h-4 mr-3" /> Security
          </button>
          <button className="w-full flex items-center px-3 py-2.5 text-sm font-medium rounded-lg text-gray-700 hover:bg-gray-100 transition">
            <Bell className="w-4 h-4 mr-3" /> Notifications
          </button>
        </div>

        <div className="flex-1">
          <div className="bg-white shadow-sm border border-gray-200 rounded-xl">
            <div className="px-6 py-5 border-b border-gray-100">
              <h2 className="text-lg font-bold text-gray-900">Profile Information</h2>
              <p className="text-sm text-gray-500 mt-1">Update your account's profile information and email address.</p>
            </div>
            <div className="p-6 space-y-6">
              <div className="flex items-center space-x-6">
                <div className="w-20 h-20 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-3xl border-4 border-white shadow-md">
                  VN
                </div>
                <button className="px-4 py-2 border border-gray-300 shadow-sm text-sm font-bold rounded-lg text-gray-700 hover:bg-gray-50 transition">
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
            <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 rounded-b-xl flex justify-end">
              <button className="px-5 py-2 bg-indigo-600 text-white rounded-lg text-sm font-bold hover:bg-indigo-700 shadow-sm transition">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
