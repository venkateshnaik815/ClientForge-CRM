import React from 'react';
import { Building2, Plus } from 'lucide-react';

export const Clients = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Clients & Companies</h1>
        <button className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition">
          <Plus className="w-4 h-4 mr-2" />
          Add Client
        </button>
      </div>
      <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center justify-center h-64 border-2 border-dashed border-gray-300">
        <Building2 className="w-12 h-12 text-gray-400 mb-4" />
        <h3 className="text-lg font-medium text-gray-900">No clients found</h3>
        <p className="text-gray-500 mt-1">Get started by creating a new client record.</p>
      </div>
    </div>
  );
};
