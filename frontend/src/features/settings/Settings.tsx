import React from 'react';
import { Settings as SettingsIcon } from 'lucide-react';

export const Settings = () => {
  return (
    <div className="h-full bg-white shadow rounded-lg p-6 flex flex-col items-center justify-center">
      <SettingsIcon className="w-16 h-16 text-indigo-200 mb-4" />
      <h2 className="text-xl font-medium text-gray-900">System Settings</h2>
      <p className="text-gray-500 mt-2">User roles and system configurations coming in Phase 6.</p>
    </div>
  );
};
